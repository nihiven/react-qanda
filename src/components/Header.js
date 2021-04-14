import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
      <header>
        <h1>
          {title}
        </h1>
      </header>
    );
}

Header.defaultProps = {
    title: 'Q and A'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
