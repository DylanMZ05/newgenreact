import { Link } from 'react-router-dom';
import useScrollToTop from '../hooks/scrollToTop';

const FreeQuoteButton = () => {
  const handleScrollToTop = useScrollToTop;

  return (
    <>
      <nav className="text-center mt-10">
        <p className="text-2xl font-semibold">Do you want to get a Free Quote?</p>
        
        <div className="flex justify-center">
          <Link
            to="/get-a-free-quote-houston"
            className="bg-orange-500 border border-white/10 text-white text-lg font-semibold px-4 py-1 rounded-full mt-4 mb-2 inline-block 
            transition-all hover:bg-orange-600 hover:scale-102"
            onClick={handleScrollToTop}
          >
            Get a Free Quote
          </Link>
        </div>
      </nav>
    </>
  );
};

export default FreeQuoteButton;