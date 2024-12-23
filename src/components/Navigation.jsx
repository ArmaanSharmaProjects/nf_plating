
export const Navigation = () => {
  const navigationItems = ['N&F', 'Projects', 'Impact', 'News', 'Support', 'Team', 'Apply'];
  
  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto">
        <ul className="flex justify-between items-center py-4">
          {navigationItems.map((item) => (
            <li key={item} className="hover:text-gray-200 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};