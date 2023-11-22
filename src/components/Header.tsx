/* eslint-disable @next/next/no-img-element */

const Header = () => {
  return (
    <div className='section-header'>
      <div className='page-padding hero'>
        <div className='container-large'>
          <div className='header-100vh'>
            <div className='padding-vertical'>
              <div className='div-block-3'>
                <div className='max-width-large'>
                  <div className='margin-bottom margin-large'>
                    <h1 className='text-color-white heading-xxhuge gradient-is-whiteblue'>COMPARE-AI</h1>
                    <p className='text-size-large text-color-white'>Unleash the power of comparison with CompareAi</p>
                  </div>
                  <div className='margin-top margin-medium'>
                    <div className='button-bar'>
                      <a
                        href='https://app.uniswap.org/swap?outputCurrency=0x8B17F620CA072EC95d4D1c85ecA11a65282B4104&chain=ethereum'
                        target='_blank'
                        className='button-primary w-inline-block'>
                        <div className='button-text'>Invest</div>
                      </a>
                      <a
                        href='https://www.dextools.io/app/en/ether/pair-explorer/0x073916e6ad1373ae6fa8a38a5c6c1e42ff22cab5'
                        target='_blank'
                        className='button-secondary w-inline-block'>
                        <div className='button-text'>View Charts</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-w-id='61cdfec5-e211-c09c-6df7-d3d89ca3b67d' className='header6_background-image-wrapper'>
        <div className='image-overlay-layer'></div>
        <div className='div-block'>
          <img src={'/background-2.png'} loading='lazy' sizes='100vw' alt='' className='image transition-ele' />
        </div>
      </div>
    </div>
  );
};

export default Header;
