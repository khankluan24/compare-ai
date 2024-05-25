import EmailIcon from '@mui/icons-material/Email';
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
            <div className='footer-content-wrapper'>
              <div id='w-node-_645696ff-498c-0231-c397-321ad05824b9-57e783b4' className='footer-logo-div'>
                <Image src='/logo.png' alt='close' width={120} height={120}></Image>
              </div>
              <div id='w-node-_5c7f0193-06f6-b300-36ad-360557e783bb-57e783b4'>
                <div id='w-node-_5c7f0193-06f6-b300-36ad-360557e783c0-57e783b4' className='w-layout-grid social-link-list'>
                  <a
                    id='w-node-_5c7f0193-06f6-b300-36ad-360557e783c5-57e783b4'
                    href='https://t.me/AceBot_Portal'
                    target='_blank'
                    className='social-link-wrappper w-inline-block'>
                    <TelegramIcon></TelegramIcon>
                    <div className='social-link-text'>Telegram</div>
                  </a>
                  <a
                    id='w-node-_5c7f0193-06f6-b300-36ad-360557e783c9-57e783b4'
                    href='https://twitter.com/Acebot_ERC'
                    target='_blank'
                    className='social-link-wrappper w-inline-block'>
                    <Image src='/X.png' alt='close' width={18} height={18}></Image>
                    <div className='social-link-text'>Twitter</div>
                  </a>
                  <a href='mailto:support@acebot.tech' className='social-link-wrappper w-inline-block'>
                    <EmailIcon />
                    <div className='social-link-text'>Support Email</div>
                  </a>
                </div>
                <span className='copyright'>© Copyright 2023 by ACEBOT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
