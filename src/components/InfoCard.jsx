import PropTypes from 'prop-types';

export const InfoCard = ({ title, content, listItems, hasButton }) => {
  const contentParagraphs = content ? content.split('\n\n') : [];

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-6 bg-primary text-white">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {contentParagraphs.map((paragraph, index) => (
          <p key={index} className="text-sm mb-4">
            {paragraph}
          </p>
        ))}
        {listItems && (
          <ol className="list-decimal pl-4 space-y-2 text-sm">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        )}
        {hasButton && (
          <button className="mt-4 px-6 py-2 bg-white text-primary rounded-md hover:bg-gray-100">
            See More
          </button>
        )}
      </div>
    </div>
  );
};

// Optional: Add PropTypes for better type checking
InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.string),
  hasButton: PropTypes.bool
};

InfoCard.defaultProps = {
  content: '',
  listItems: null,
  hasButton: false
};