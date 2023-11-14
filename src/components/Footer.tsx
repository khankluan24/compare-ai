import TelegramIcon from '@mui/icons-material/Telegram';
import Image from 'next/image';

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <footer className='footer6_component'>
      <div className='div-block-6'></div>
      <div className='page-padding'>
        <div className='container-large'>
          <div className='padding-vertical'>
            <div className='w-layout-grid footer-content-wrapper'>
              <div id='w-node-_645696ff-498c-0231-c397-321ad05824b9-57e783b4' className='footer-logo-div'>
                <Image src='/logo.png' alt='close' width={150} height={70}></Image>

                <div className='div-block-35'>
                  <h4 className='heading-7'></h4>
                  <div className='partner-description'></div>
                </div>
              </div>
              <div id='w-node-_5c7f0193-06f6-b300-36ad-360557e783bb-57e783b4'>
                <h4 id='w-node-_5c7f0193-06f6-b300-36ad-360557e783bc-57e783b4' className='heading-3'>
                  Staying Updated with CompareAi
                </h4>
                <div className='partner-description'>
                  {"CompareAi's official channels and social profiles. Please exercise caution to avoid fraudulent attempts to replicate our presence"}
                </div>
                <div id='w-node-_5c7f0193-06f6-b300-36ad-360557e783c0-57e783b4' className='w-layout-grid social-link-list'>
                  <a
                    id='w-node-_5c7f0193-06f6-b300-36ad-360557e783c5-57e783b4'
                    href='https://t.me/CompareAi_Portal'
                    target='_blank'
                    className='social-link-wrappper w-inline-block'>
                    <TelegramIcon></TelegramIcon>
                    <div className='social-link-text'>Telegram</div>
                  </a>
                  <a
                    id='w-node-_5c7f0193-06f6-b300-36ad-360557e783c9-57e783b4'
                    href='https://twitter.com/CompareAi'
                    target='_blank'
                    className='social-link-wrappper w-inline-block'>
                    <Image src='/X.png' alt='close' width={18} height={18}></Image>
                    <div className='social-link-text'>Twitter</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
