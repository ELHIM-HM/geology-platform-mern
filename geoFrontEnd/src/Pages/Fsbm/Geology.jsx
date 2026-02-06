import Navbar from '../../Components/Navbar/Navbar';


const App = () => {
  const chefDepartement = 'PR. MOHAMED RAJI';

  const courses = [
    { id: 1, title: 'FUNDAMENTAL LICENSES:', instructor: 'Earth and Universe Sciences', Coordonnateur: 'Pr. Faouziya Haissen' },
    { id: 2, title: 'MASTERS :', instructor: 'Master Geology Applied to Natural Resources Prospecting', Coordonnateur: 'Pr. Rachid ESSAMOUD' },
    { id: 2, title: 'MASTERS :', instructor: 'Master Geomatics Applied to Geosciences and Environment', Coordonnateur: 'Pr. Mohamed RAJI' },
    { id: 3, title: 'Doctoral training:', Formation: 'Geosciences and Environment (GE)', Laboratoires: ['Laboratory of Applied Geology, Geomatics and Environment (LGAGE)', 'Laboratory of Sedimentary Basin Dynamics and Geological Correlations (LDBSCG)', 'Geodynamic Laboratory of Ancient Chains (LGCA)'] },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <header className="bg-gray-900 text-white py-5 text-center mt-12">
        <h1 className="text-2xl">Department of Geology</h1>
      </header>

      <main className="flex-grow container mx-auto p-5">
        <h2 className="text-2xl font-bold text-center uppercase tracking-wide mb-5 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Presentation</h2>
        <div className="text-center mb-5">
          <p className="text-xl font-semibold">Department Head:</p>
          <p className="text-xl text-blue-500">{chefDepartement}</p>
        </div>
        <ul className="space-y-4">
          {courses.map(course => (
            <li key={course.id} className="bg-white shadow p-4 rounded">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">{course.title}</h3>
              {course.instructor && <p className="text-black"><strong>Title:</strong> {course.instructor}</p>}
              {course.Coordonnateur && <p className="text-black"><strong>Program Coordinator:</strong> {course.Coordonnateur}</p>}
              {course.Formation && <p className="text-black"><strong>Doctoral Training:</strong> {course.Formation}</p>}
              {course.Laboratoires && (
                <div className="laboratoires-section">
                  <p className="laboratoires-title"><strong>Laboratories</strong></p>
                  <ul>
                    {course.Laboratoires.map((laboratoire, index) => (
                      <li key={index} className="laboratoire-item">{laboratoire}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
      <footer className="bg-gray-800 text-white py-5 text-center mt-auto">
        <p>&copy;The Faculty of Sciences Ben M'Sick's mission is to train competent students, capable of applying their knowledge and skills to meet the demands of an increasingly demanding, complex, and unpredictable economic and social environment.</p>
      </footer>
    </div>
  );
};

export default App;
