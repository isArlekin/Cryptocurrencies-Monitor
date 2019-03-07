import PropTypes from 'prop-types';

export const columnInterface = PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    sortField: PropTypes.string,
    sortingEnabled: PropTypes.bool,
    controls: PropTypes.bool,
});
