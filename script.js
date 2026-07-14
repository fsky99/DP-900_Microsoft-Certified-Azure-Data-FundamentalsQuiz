const state = {
  section: null,
  questions: [],
  currentIndex: 0,
  answers: new Map()
};

const els = Object.fromEntries([
  'totalQuestions','answeredCount','liveScore','wrongCount','domain','questionText','questionCounter','progressFill',
  'answerForm','feedback','submitBtn','nextBtn','previousBtn','restartBtn','changeSectionBtn','quizCard','sectionCard',
  'sectionGrid','resultCard','finalPercent','finalScoreText','scoreMessage','domainBreakdown','restartBtnEnd','sectionsBtnEnd',
  'toggleReviewBtn','reviewList','questionNavigator','currentSectionName','sectionProgressText'
].map(id => [id, document.getElementById(id)]));

const DOMAIN_DESCRIPTIONS = {
  'Describe core data concepts': 'Data types, file formats, transactional and analytical workloads, and data roles.',
  'Identify considerations for relational data on Azure': 'Relational concepts, SQL, database objects, Azure SQL, and open-source database services.',
  'Describe considerations for working with non-relational data on Azure': 'Azure Storage, NoSQL models, Blob tiers, and Azure Cosmos DB APIs.',
  'Describe an analytics workload on Azure': 'Ingestion, ETL/ELT, large-scale and real-time analytics, Microsoft Fabric, and Power BI.'
};

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildSectionChooser() {
  const domains = [...new Set(QUESTIONS.map(q => q.domain))];
  const sections = [
    { name: 'Mixed Exam', count: QUESTIONS.length, description: 'All domains combined and reshuffled for broad exam practice.', mixed: true },
    ...domains.map(name => ({
      name,
      count: QUESTIONS.filter(q => q.domain === name).length,
      description: DOMAIN_DESCRIPTIONS[name] || 'Focused practice for this exam domain.'
    }))
  ];

  els.sectionGrid.innerHTML = sections.map(section => `
    <button class="section-option${section.mixed ? ' mixed' : ''}" type="button" data-section="${escapeHtml(section.name)}">
      <span class="section-icon">${section.mixed ? '✦' : '›'}</span>
      <span class="section-copy">
        <strong>${escapeHtml(section.name)}</strong>
        <small>${escapeHtml(section.description)}</small>
      </span>
      <span class="section-count">${section.count}<small>questions</small></span>
    </button>
  `).join('');

  els.sectionGrid.querySelectorAll('.section-option').forEach(button => {
    button.addEventListener('click', () => startSection(button.dataset.section));
  });
}

function startSection(sectionName) {
  state.section = sectionName;
  const pool = sectionName === 'Mixed Exam' ? QUESTIONS : QUESTIONS.filter(q => q.domain === sectionName);
  state.questions = shuffle(pool).map(q => ({ ...q, options: shuffle(q.options) }));
  state.currentIndex = 0;
  state.answers = new Map();

  els.sectionCard.classList.add('hidden');
  els.resultCard.classList.add('hidden');
  els.reviewList.classList.add('hidden');
  els.quizCard.classList.remove('hidden');
  els.changeSectionBtn.classList.remove('hidden');
  els.currentSectionName.textContent = sectionName;
  renderQuestion();
}

function showSections() {
  els.quizCard.classList.add('hidden');
  els.resultCard.classList.add('hidden');
  els.sectionCard.classList.remove('hidden');
  els.changeSectionBtn.classList.add('hidden');
  updateStats();
}

function restartCurrentSection() {
  if (!state.section) return;
  startSection(state.section);
}

function renderQuestion() {
  const q = state.questions[state.currentIndex];
  const saved = state.answers.get(q.id);

  els.domain.textContent = q.domain;
  els.questionText.textContent = q.question;
  els.questionCounter.textContent = `Question ${state.currentIndex + 1} of ${state.questions.length}`;
  els.previousBtn.disabled = state.currentIndex === 0;
  els.nextBtn.textContent = state.currentIndex === state.questions.length - 1 ? 'Finish' : 'Next';
  els.feedback.className = 'feedback hidden';
  els.feedback.innerHTML = '';
  els.answerForm.innerHTML = '';

  q.options.forEach((option, index) => {
    const id = `answer-${state.currentIndex}-${index}`;
    const label = document.createElement('label');
    label.className = 'answer-option';
    label.setAttribute('for', id);
    label.innerHTML = `<input type="radio" name="answer" id="${id}" value="${escapeHtml(option)}"><span>${escapeHtml(option)}</span>`;

    if (saved) {
      label.classList.add('disabled');
      label.querySelector('input').disabled = true;
      if (option === saved.selected) label.classList.add('selected');
      if (option === q.answer) label.classList.add('correct');
      if (option === saved.selected && !saved.correct) label.classList.add('incorrect');
    } else {
      label.addEventListener('click', () => selectAnswer(option, label));
    }
    els.answerForm.appendChild(label);
  });

  if (saved) {
    showFeedback(q, saved);
    els.submitBtn.classList.add('hidden');
  } else {
    els.submitBtn.classList.remove('hidden');
    els.submitBtn.disabled = true;
    els.submitBtn.dataset.selected = '';
  }

  updateStats();
  renderNavigator();
}

function selectAnswer(option, label) {
  els.submitBtn.dataset.selected = option;
  els.answerForm.querySelectorAll('.answer-option').forEach(el => el.classList.remove('selected'));
  label.classList.add('selected');
  els.submitBtn.disabled = false;
}

function submitAnswer() {
  const selected = els.submitBtn.dataset.selected;
  if (!selected) return;
  const q = state.questions[state.currentIndex];
  if (state.answers.has(q.id)) return;

  state.answers.set(q.id, {
    selected,
    correct: selected === q.answer
  });
  renderQuestion();
}

function showFeedback(q, saved) {
  els.feedback.classList.remove('hidden');
  els.feedback.classList.add(saved.correct ? 'correct-text' : 'wrong-text');
  els.feedback.innerHTML = `
    <strong>${saved.correct ? 'Correct!' : 'Not correct.'}</strong><br>
    Correct answer: <strong>${escapeHtml(q.answer)}</strong><br>
    ${escapeHtml(q.explanation)}
  `;
}

function goToQuestion(index) {
  if (index < 0 || index >= state.questions.length) return;
  state.currentIndex = index;
  renderQuestion();
  window.scrollTo({ top: els.quizCard.offsetTop - 18, behavior: 'smooth' });
}

function nextQuestion() {
  if (state.currentIndex < state.questions.length - 1) goToQuestion(state.currentIndex + 1);
  else showResults();
}

function previousQuestion() {
  goToQuestion(state.currentIndex - 1);
}

function renderNavigator() {
  els.questionNavigator.innerHTML = state.questions.map((q, index) => {
    const answer = state.answers.get(q.id);
    const status = answer ? (answer.correct ? 'correct' : 'wrong') : 'unanswered';
    const current = index === state.currentIndex ? ' current' : '';
    return `<button type="button" class="question-chip ${status}${current}" data-index="${index}" aria-label="Go to question ${index + 1}">${index + 1}</button>`;
  }).join('');

  els.questionNavigator.querySelectorAll('.question-chip').forEach(button => {
    button.addEventListener('click', () => goToQuestion(Number(button.dataset.index)));
  });
}

function getStats() {
  const values = [...state.answers.values()];
  return {
    answered: values.length,
    correct: values.filter(a => a.correct).length,
    wrong: values.filter(a => !a.correct).length
  };
}

function updateStats() {
  const stats = getStats();
  els.totalQuestions.textContent = state.questions.length || QUESTIONS.length;
  els.answeredCount.textContent = stats.answered;
  els.liveScore.textContent = stats.correct;
  els.wrongCount.textContent = stats.wrong;
  els.sectionProgressText.textContent = `${stats.answered} / ${state.questions.length || 0}`;
  els.progressFill.style.width = state.questions.length ? `${(stats.answered / state.questions.length) * 100}%` : '0%';
}

function showResults() {
  els.quizCard.classList.add('hidden');
  els.resultCard.classList.remove('hidden');
  const stats = getStats();
  const total = state.questions.length;
  const percent = total ? Math.round((stats.correct / total) * 100) : 0;
  els.finalPercent.textContent = `${percent}%`;
  els.finalScoreText.textContent = `${stats.correct} correct · ${stats.wrong} wrong · ${total - stats.answered} unanswered`;

  if (percent >= 90) els.scoreMessage.textContent = 'Excellent result. Review any missed questions, then try the Mixed Exam again with a new random order.';
  else if (percent >= 80) els.scoreMessage.textContent = 'Good work. Review the explanations and repeat weaker sections before the exam.';
  else if (percent >= 70) els.scoreMessage.textContent = 'A useful start. Focus on the domains where your score is lowest and repeat them.';
  else els.scoreMessage.textContent = 'Keep studying and use the missed-question review to identify the concepts that need more work.';

  renderBreakdown();
  renderReviewList();
  updateStats();
}

function renderBreakdown() {
  const domains = {};
  state.questions.forEach(q => {
    if (!domains[q.domain]) domains[q.domain] = { correct: 0, wrong: 0, unanswered: 0, total: 0 };
    domains[q.domain].total++;
    const answer = state.answers.get(q.id);
    if (!answer) domains[q.domain].unanswered++;
    else if (answer.correct) domains[q.domain].correct++;
    else domains[q.domain].wrong++;
  });

  els.domainBreakdown.innerHTML = Object.entries(domains).sort(([a],[b]) => a.localeCompare(b)).map(([domain, data]) => `
    <div class="breakdown-card">
      <b>${escapeHtml(domain)}</b>
      <span class="green-text">${data.correct} correct</span>
      <span class="red-text">${data.wrong} wrong</span>
      <span>${data.unanswered} unanswered · ${data.total} total</span>
    </div>
  `).join('');
}

function renderReviewList() {
  const missed = state.questions.filter(q => state.answers.has(q.id) && !state.answers.get(q.id).correct);
  els.toggleReviewBtn.disabled = missed.length === 0;
  els.toggleReviewBtn.textContent = missed.length ? `Review Missed Questions (${missed.length})` : 'No Missed Questions';
  els.reviewList.innerHTML = missed.map((q, index) => {
    const answer = state.answers.get(q.id);
    return `<article class="review-item"><strong>${index + 1}. ${escapeHtml(q.question)}</strong><p>Your answer: ${escapeHtml(answer.selected)}</p><p>Correct answer: <strong>${escapeHtml(q.answer)}</strong></p><p>${escapeHtml(q.explanation)}</p></article>`;
  }).join('');
}

function toggleReview() {
  if (!els.toggleReviewBtn.disabled) els.reviewList.classList.toggle('hidden');
}

function escapeHtml(value) {
  return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
}

els.submitBtn.addEventListener('click', submitAnswer);
els.nextBtn.addEventListener('click', nextQuestion);
els.previousBtn.addEventListener('click', previousQuestion);
els.restartBtn.addEventListener('click', restartCurrentSection);
els.restartBtnEnd.addEventListener('click', restartCurrentSection);
els.changeSectionBtn.addEventListener('click', showSections);
els.sectionsBtnEnd.addEventListener('click', showSections);
els.toggleReviewBtn.addEventListener('click', toggleReview);

buildSectionChooser();
showSections();
