
const projects = [
  {
    name: "morse-study",
    description: "Ứng dụng học mã morse siêu hay ho đơn giản.",
    github: "https://thanghope.github.io/morse-game/"
  },
  {
    name: "quiz-maker",
    description: "Web tạo và làm bài trắc nghiệm có lọc câu sai, giao diện đẹp.",
    github: "https://thanghope.github.io/Quiz-Tool/"
  },
  {
    name: "studytimer-full",
    description: "App học Pomodoro có đếm giờ, lưu lịch sử, giao diện tối/sáng.",
    github: " https://thanghope.github.io/Studytimer/"
  }
];

const projectContainer = document.getElementById('projects');
projects.forEach(p => {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p><a href='${p.github}' target='_blank'>🔗 GitHub</a>`;
  projectContainer.appendChild(div);
});
