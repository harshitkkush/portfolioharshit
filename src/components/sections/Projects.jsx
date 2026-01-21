import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> URL Shortener Web Application </h3>
              <p className="text-gray-400 mb-4">
              Built a full-stack URL Shortener using Spring Boot with Thymeleaf for the frontend and MySQL as the database. The application allows users to convert long URLs into short, unique links and seamlessly redirects users to the original URLs.
Key features include:
Clean and responsive UI using Thymeleaf templates

Backend built with Spring Boot, Spring MVC, and Spring Data JPA
MySQL database integration with Hibernate ORM
Automatic short code generation and persistent URL mapping
Server-side validation and error handling
Successfully deployed on Railway, using environment-based configuration for production
This project helped me strengthen my understanding of Java backend development, MVC architecture, database integration, and real-world deployment workflows.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Spring Boot", "Spring MVC", "Spring Data JPA","MySQL","Thymeleaf"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://urlshortner-production-2c00.up.railway.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
MoneyMap – Expense Tracking Web App</h3>
              <p className="text-gray-400 mb-4">
                MoneyMap is a simple and user-friendly expense tracking application built using React.js. It helps users track their daily expenses, manage spending categories, and get a clear overview of their financial habits.
Key Features:
Add, edit, and delete income and expenses
Categorize transactions for better tracking
Real-time expense summary and balance calculation
Clean and responsive UI built with React components
Tech Stack:
React.js, JavaScript, HTML, CSS
This project helped me strengthen my understanding of React hooks, state management, component-based architecture, and building real-world frontend applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "JavaScript", "HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://moneymap-olive.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Recipe Website</h3>
              <p className="text-gray-400 mb-4">
              Developed a recipe website using ReactJS and MealDB API, enabling users to browse, search, and filter recipes
              seamlessly.Utilized ReactJS components and hooks to create a responsive, modular and efficient user interface that
              works across all devices.Integrated MealDB API to fetch real-time recipe data including detailedingredients,
              instructions, and images enhancing user engagement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ReactJs", "HTML", "Tailwind", "MealDB"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Real-Time Tracker using Socket.IO</h3>
              <p className="text-gray-400 mb-4">
              Developed a real-time location tracking system using Socket.IO, Node.js, and Google Maps API, enabling live updates
              for moving objects.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Google Maps API"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};