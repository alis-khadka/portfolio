import './PortfolioContent.scss';
import FixedContent from './FixedContent';
import ScrollableContent from './ScrollableContent';

function PortfolioContent() {
  return (
    <div>
      <FixedContent />
      <ScrollableContent />
    </div>
  );
}

export default PortfolioContent;
