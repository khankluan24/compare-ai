/* eslint-disable @next/next/no-img-element */

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='section-header'>
      <div className='page-padding hero'>
        <div className='container-large'>
          <div className='header-100vh'>
            <div className='padding-vertical'>
              <div className='div-block-3'>
                <div className='max-width-large'>
                  <div className='margin-bottom margin-large hero-text'>
                    <h1 className='text-color-white heading-xxhuge gradient-is-whiteblue'>AceBOT</h1>
                    <p className='text-size-large text-color-white'>Your Passport to Smart Contract Mastery!</p>
                  </div>
                  <div className='margin-top margin-medium'>
                    <div className='button-bar'>
                      <a
                        href='https://app.uniswap.org/swap?outputCurrency=0x8B17F620CA072EC95d4D1c85ecA11a65282B4104&chain=ethereum'
                        target='_blank'
                        className='button-primary w-inline-block'>
                        <div className='button-text'>Trade</div>
                      </a>
                      <a
                        href='https://www.dextools.io/app/en/ether/pair-explorer/0xdf41310dd5324760549a8f8643f3d3f202ab358b'
                        target='_blank'
                        className='button-secondary w-inline-block'>
                        <div className='button-text'>AceBOT</div>
                      </a>
                    </div>
                    <div className='scan-ai'>
                      <span>CA: </span>
                      <IconButton>
                        <ContentCopyIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image src='/mascot-1.png' alt='mascot' width={600} height={600} className='hero-img' />
          </div>
        </div>
      </div>
      <div data-w-id='61cdfec5-e211-c09c-6df7-d3d89ca3b67d' className='header6_background-image-wrapper'>
        <div className='image-overlay-layer'></div>
        {/* <div className='div-block'>
          <img src={'/background-2.png'} loading='lazy' sizes='100vw' alt='' className='image transition-ele' />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
