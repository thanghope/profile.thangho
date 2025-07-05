
const projects = [
  {
    name: "superchat",
    description: "Ứng dụng chat online siêu hay ho, có đăng nhập, MongoDB lưu trữ.",
    github: "https://github.com/thanghope/superchat"
  },
  {
    name: "quiz-maker",
    description: "Web tạo và làm bài trắc nghiệm có lọc câu sai, giao diện đẹp.",
    github: "https://github.com/thanghope/quiz-maker"
  },
  {
    name: "studytimer-full",
    description: "App học Pomodoro có đếm giờ, lưu lịch sử, giao diện tối/sáng.",
    github: "https://github.com/thanghope/studytimer-full"
  }
];

const projectContainer = document.getElementById('projects');
projects.forEach(p => {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p><a href='${p.github}' target='_blank'>🔗 GitHub</a>`;
  projectContainer.appendChild(div);
});
