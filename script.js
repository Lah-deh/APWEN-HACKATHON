
  const questions = document.querySelectorAll('#question');

  questions.forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = question.classList.contains('open');

      // Close all answers first
      document.querySelectorAll('#answer').forEach(ans => ans.style.display = 'none');
      document.querySelectorAll('#question').forEach(q => q.classList.remove('open'));

      // Open the clicked one if it wasn't already open
      if (!isOpen) {
        answer.style.display = 'block';
        question.classList.add('open');
      }
    });
  });

