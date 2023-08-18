import './PortfolioContent.scss';
import FixedContent from './FixedContent';
import ScrollableContent from './ScrollableContent';

function PortfolioContent() {
  return (
    <div className='portfolio-content'>
      <FixedContent />
      <ScrollableContent />
    </div>
  );
}

export default PortfolioContent;
