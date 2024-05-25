/* eslint-disable @next/next/no-html-link-for-pages */
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import Image from 'next/image';
import { useState } from 'react';
import * as styles from '@/styles/components/Menu';

const Menu = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [isShowChild, setIsShowChild] = useState(false);

  const onClickMenu = () => {
    if (isShowNav) {
      setIsShowChild(false);
      setTimeout(() => {
        setIsShowNav(false);
      }, 300);
    } else {
      setIsShowNav(true);
      setTimeout(() => {
        setIsShowChild(true);
      }, 20);
    }
  };

  return (
    <div className='section-menu'>
      <section className='section-contact-modal3'>
        <div className='page-padding-2'>
          <div className='container-large'>
            <div className='padding-vertical'>
              <div className='nav-wrapper'>
                <a href='/' aria-current='page' className='navbar6_logo-link w-nav-brand w--current'>
                  <Image src='/logo.png' alt='close' width={100} height={100}></Image>
                </a>
                <div className='show-desktop'>
                  <div className='nav-link-list-hor'>
                    <a href='#header' aria-current='page' className='nav-link w-inline-block w--current link--current'>
                      <div>Home</div>
                    </a>
                    <a href='#introduction' className='nav-link w-inline-block link--current'>
                      <div>Introduction</div>
                    </a>
                    <a href='#products' className='nav-link hidden w-inline-block  link--current'>
                      <div>Products</div>
                    </a>
                    <a href='#price' className='nav-link w-inline-block link--current'>
                      <div>Tokenomics</div>
                    </a>
                    <a href='#roadmap' className='nav-link w-inline-block link--current'>
                      <div>Roadmap</div>
                    </a>
                  </div>
                </div>
                <div className='button-row is-button-row-center'>
                  <div className='contact-modal3_component-2 ' css={[styles.display(isShowNav)]}>
                    <div className='contact-modal3_content-wrapper-2' css={styles.contactModal3ContentWrapper2(isShowChild)}>
                      <div className='margin-bottom margin-large'>
                        <div className='text-align-center-2'>
                          <div className='max-width-large-2 align-center'>
                            <div className='margin-bottom margin-xsmall'>
                              <div className='div-block-19'>
                                <Image src='/logo.png' alt='close' width={120} height={120}></Image>
                                <div className='nav-link-list'>
                                  <a href='#header' aria-current='page' className='nav-link w-inline-block w--current'>
                                    <div>Home</div>
                                  </a>
                                  <a href='#introduction' className='nav-link w-inline-block'>
                                    <div>Introduction</div>
                                  </a>
                                  <a href='#products' className='nav-link hidden w-inline-block'>
                                    <div>Products</div>
                                  </a>
                                  <a href='#price' className='nav-link w-inline-block'>
                                    <div>Tokenomics</div>
                                  </a>
                                  <a href='#roadmap' className='nav-link w-inline-block'>
                                    <div>Roadmap</div>
                                  </a>
                                </div>
                                <a href='https://docs.compareai.bot/' target='_blank' className='button-primary is-in-nav is-in-mobile w-inline-block'>
                                  <div className='button-text'>White Paper</div>
                                </a>
                                <div className='w-layout-grid social-link-list mobile'>
                                  <a
                                    id='w-node-b87d70e6-4c6b-380a-71c4-72a39b280e44-6d0eefca'
                                    href='https://t.me/AceBot_Portal'
                                    target='_blank'
                                    className='social-link-wrappper w-inline-block'>
                                    <TelegramIcon></TelegramIcon>
                                    <div className='social-link-text'>Telegram</div>
                                  </a>
                                  <a
                                    id='w-node-b87d70e6-4c6b-380a-71c4-72a39b280e48-6d0eefca'
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
                                <a href='#' className='nav-link is-small w-inline-block'>
                                  <div>Terms &amp;&nbsp;Conditions</div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a data-w-id='58ce1a83-824e-d1ff-e9ba-adf06d0eefde' className='contact-modal3_close-button-2 w-inline-block'>
                        <Image src='/close_light.svg' alt='close' width={19} height={19} onClick={onClickMenu}></Image>
                      </a>
                    </div>
                    <div
                      data-w-id='58ce1a83-824e-d1ff-e9ba-adf06d0eefe0'
                      className='contact-modal3_background-overlay-2'
                      css={[styles.display(isShowNav)]}
                      onClick={onClickMenu}></div>
                  </div>
                  <a href='https://docs.compareai.bot/' target='_blank' className='button-primary is-in-nav w-inline-block'>
                    <div className='button-text'>White Paper</div>
                  </a>
                  <div className='show-desktop'>
                    <div className='menu-group-icon'>
                      <a
                        id='w-node-b87d70e6-4c6b-380a-71c4-72a39b280e48-6d0eefca'
                        href='https://twitter.com/Acebot_ERC'
                        target='_blank'
                        className='social-link-wrappper-menu '>
                        <Image src='/X.png' alt='close' width={18} height={18}></Image>
                      </a>
                      <a href='mailto:support@acebot.tech' className='social-link-wrappper-menu'>
                        <TelegramIcon></TelegramIcon>
                      </a>
                    </div>
                  </div>
                  <a data-w-id='58ce1a83-824e-d1ff-e9ba-adf06d0eefe1' className='link-block-3 w-inline-block cursor-default  hidden-desktop'>
                    <div className='menu-icon4_wrapper cursor-pointer' onClick={onClickMenu}>
                      <div className='menu-icon4_line-top-2'></div>
                      <div className='menu-icon4_line-middle-2'>
                        <div className='menu-icon_line-middle-top'></div>
                        <div className='menu-icon_line-middle-base-2'></div>
                      </div>
                      <div className='menu-icon4_line-bottom-2'></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Menu;
