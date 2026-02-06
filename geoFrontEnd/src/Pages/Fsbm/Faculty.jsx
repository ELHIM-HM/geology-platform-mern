import Navbar from '../../Components/Navbar/Navbar';

const FaculteHeader = () => (
  <header className="bg-gray-900 text-white py-5 text-center mt-12">
    <h1 className="text-2xl">Faculty of Sciences Ben M'Sick</h1>
  </header>
);

const PresentationGenerale = () => (
  <section className="p-5 bg-white shadow-md rounded-md mt-5">
    <h2 className="text-2xl font-bold text-center uppercase tracking-wide mb-5 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
    General Presentation
    </h2>
    <div className="space-y-8">
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="text-xl font-semibold mb-2">History and Foundation</h3>
        <p>The Faculty of Sciences Ben M'Sick was founded in [1984] with the mission of promoting higher education and research in various scientific disciplines.</p>
      </div>
      <div className="border-l-4 border-green-500 pl-4">
        <h3 className="text-xl font-semibold mb-2">Departments and Programs</h3>
        <p>The faculty is organized into several departments offering diverse programs in biology, geology, chemistry, mathematics and computer science, physics, and humanities.</p>
      </div>
      <div className="border-l-4 border-purple-500 pl-4">
        <h3 className="text-xl font-semibold mb-2">Laboratories</h3>
        <p>Doctoral Training in Biology, Health, and Environment (BSE)</p>
        <p>Doctoral Training in Chemistry: Research and Development (CRD)</p>
        <p>Doctoral Training in Geosciences and Environment (GE)</p>
        <p>Doctoral Training in Physics and Applications (PA)</p>
        <p>Doctoral Training in Mathematics, Computer Science, and Information Processing (MITI)</p>
        <p>Doctoral Training in Engineering and Education Techniques (IFDST)</p>
      </div>
      <div className="border-l-4 border-yellow-500 pl-4">
        <h3 className="text-xl font-semibold mb-2">Teaching Staff</h3>
        <p>PR ABDESLAM EL BOUARI - PR OMAR ZAKARY - PR ANASS KETTANI - PR BOUBKER MEHDAOUI - PR BOUBKER MEHDAOUI - PR ABDELAZIZ BOUROUMI - PR ABDERRAHIM TRAGHA - PR MOHAMED EL HAFIDI -  </p>
      </div>
      <div className="border-l-4 border-red-500 pl-4">
        <h3 className="text-xl font-semibold mb-2">Research and Innovation</h3>
        <p>The faculty encourages research and innovation in various scientific fields, with a particular emphasis on interdisciplinary projects.</p>
      </div>
      <div className="border-l-4 border-teal-500 pl-4">
        <h3 className="text-xl font-semibold mb-2">Collaborations and Partnerships</h3>
        <p>We have established collaborations and partnerships with national and international institutions to enrich our academic program and provide better opportunities for our students.</p>
      </div>
    </div>
  </section>
);

const Departements = () => (
  <div>
    <Navbar />
    <PresentationGenerale />
    <section className="p-5 rounded-md shadow-md bg-white mt-5">
      <div>
        <h2 className="text-2xl font-bold text-center uppercase tracking-wide mb-5 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        Our Departments
        </h2>
      </div>
      <ul className="list-none p-0 m-0 flex flex-wrap shadow-md">
  <li className="bg-gray-100 m-2 p-4 border border-gray-300 flex-1 min-w-[200px] transform hover:rotate-y-10 transition-transform duration-500 rounded-md shadow-md">
    <h3 className="text-center bg-white bg-opacity-80 p-2 rounded-md border border-gray-300">DÉPARTEMENT DE BIOLOGIE</h3>
    <p className="text-gray-800">The department offers a comprehensive range of academic programs and research covering various areas of biology. Our programs include undergraduate, master's, and doctoral degrees, providing students with a strong education and an opportunity to participate in innovative research projects.</p>
  </li>
  <li className="bg-gray-100 m-2 p-4 border border-gray-300 flex-1 min-w-[200px] transform hover:rotate-y-10 transition-transform duration-500 rounded-md shadow-md">
    <h3 className="text-center bg-white bg-opacity-80 p-2 rounded-md border border-gray-300">Department of Geology</h3>
    <p className="text-gray-800">The department is at the forefront of exploring and understanding the structure, composition, and evolution of the Earth. With a diverse team of passionate researchers and educators, we provide world-class training in all aspects of geology.</p>
  </li>
  <li className="bg-gray-100 m-2 p-4 border border-gray-300 flex-1 min-w-[200px] transform hover:rotate-y-10 transition-transform duration-500 rounded-md shadow-md">
    <h3 className="text-center bg-white bg-opacity-80 p-2 rounded-md border border-gray-300">Department of Chemistry</h3>
    <p className="text-gray-800">The department offers comprehensive and innovative training in the field of chemistry, covering a wide range of disciplines from fundamental chemistry to its practical applications in various industrial and scientific sectors.</p>
  </li>
  <li className="bg-gray-100 m-2 p-4 border border-gray-300 flex-1 min-w-[200px] transform hover:rotate-y-10 transition-transform duration-500 rounded-md shadow-md">
    <h3 className="text-center bg-white bg-opacity-80 p-2 rounded-md border border-gray-300">Department of Mathematics and Computer Science</h3>
    <p className="text-gray-800">The department offers a diverse range of academic programs and research that explore the depths of mathematics and computer science, two fundamental disciplines that underpin a multitude of scientific, technological, and commercial fields.</p>
  </li>
  <li className="bg-gray-100 m-2 p-4 border border-gray-300 flex-1 min-w-[200px] transform hover:rotate-y-10 transition-transform duration-500 rounded-md shadow-md">
    <h3 className="text-center bg-white bg-opacity-80 p-2 rounded-md border border-gray-300">Department of Physics</h3>
    <p className="text-gray-800">The department is at the forefront of research and teaching in the field of physics, offering leading academic programs and exciting research opportunities in various areas of the discipline.</p>
  </li>
  <li className="bg-gray-100 m-2 p-4 border border-gray-300 flex-1 min-w-[200px] transform hover:rotate-y-10 transition-transform duration-500 rounded-md shadow-md">
    <h3 className="text-center bg-white bg-opacity-80 p-2 rounded-md border border-gray-300">Department of Humanities (Transversal)</h3>
    <p className="text-gray-800">The department offers an interdisciplinary and transversal education that explores the complex dimensions of human experience through a variety of disciplines in the humanities. Our educational approach aims to provide students with a holistic understanding of society, culture, and the individual, while encouraging critical thinking, deep analysis, and effective communication.</p>
  </li>
</ul>



    </section>
    <footer className="bg-gray-800 text-white py-5 text-center transition-transform duration-300 mt-5">
      <p>
        &copy;The Faculty of Sciences Ben M'Sick's mission is to train competent students,
        able to apply their knowledge<br /> and their skills at the service of an increasingly demanding, complex, and unpredictable economic and social environment.
      </p>
    </footer>
  </div>
);

const App = () => (
  <div className="font-sans">
    <FaculteHeader />
    <Departements />
  </div>
);

export default App;
