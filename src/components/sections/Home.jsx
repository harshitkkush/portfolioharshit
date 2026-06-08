import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Harshit Kushwaha
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a passionate software developer with hands-on experience in solving real-world problems using data structures and algorithms. I enjoy tackling challenging problems and consistently improving my problem-solving skills through platforms like LeetCode.

💡 Currently focused on learning system design and full-stack development using Java Full-stack.
🚀 I believe in writing clean, efficient code and constantly learning from failure and feedback.

📈 Always open to connecting with like-minded developers.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
             <a
              href="https://leetcode.com/u/harshitkkush/"
              className="border border-yellow-500/50 text-yellow-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              LeetCode
            </a>
             <a
              href="https://www.linkedin.com/in/harshit-kushwaha-029593239/"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/harshitkkush/"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              GitHub
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/harshitkkush/"
              className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-500/10"
            >
              GeeksForgeeks
            </a>
            <a
              href="https://www.codechef.com/users/harshitkkush/"
              className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-red-500/10"
            >
              CodeChef
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
