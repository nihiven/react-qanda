import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAddForm }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showAddForm ? 'red' : 'green'}
        text={showAddForm ? 'Hide Form' : 'Ask Question'}
        onClick={onAdd}
        showAddTask={showAddForm}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Q and A',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
