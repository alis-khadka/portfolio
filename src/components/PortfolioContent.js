import './PortfolioContent.scss';
import FixedContent from './FixedContent';
import ScrollableContent from './ScrollableContent';

function PortfolioContent(props) {
  return (
    <div className='portfolio-content'>
      <FixedContent />
      <ScrollableContent {...props} />
    </div>
  );
}

export default PortfolioContent;
