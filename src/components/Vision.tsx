import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as styles from '@/styles/components/Header';

const UniswapLogo = '/uniswap-uni-logo.svg';
const DexToolsLogo = '/dextools.svg';
const EthereumLogo = '/ethereum-eth-logo.svg';
const Coingecko1 = '/coingecko-1.svg';
const OpenAiSvg = '/openai-svgrepo-com.svg';

const Vision = ({ positionScroll }: { positionScroll: number }) => {
  const [position, setPosition] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (positionScroll > 2400 && positionScroll < 4500) {
      return setPosition({ left: (positionScroll - 3100) / 18, right: (positionScroll - 2800) / 7 });
    }
  }, [positionScroll]);

  return (
    <section data-w-id='94bbc353-5ccd-6d20-a2bc-2ea8fb9d20d8' className='section-layout192 margin-vertical margin-xhuge' id='contender'>
      <div className='slanted-bg margin-vertical magin-xhuge'></div>
      <div className='page-padding'>
        <div className='container-large'>
          <div className='padding-vertical'>
            <div className='w-layout-grid layout192_component'>
              <div id='w-node-f01c669d-f204-6c13-91a9-ddf1ba0c25b9-1c48dc11' className='div-block-5'>
                <div id='w-node-bc5d39a6-dede-588c-aa20-9d9cd6fe9829-1c48dc11' className='partner-column left' css={styles.position(position.left)}>
                  <div id='w-node-d989ee35-0eee-99c2-cd46-60bb9260bfd1-1c48dc11' className='partner-wrapper'>
                    <Image src={UniswapLogo} width={100} height={100} alt=''></Image>
                  </div>
                  <div id='w-node-_8250bf34-bb25-8313-689a-992cd475396a-1c48dc11' className='partner-wrapper'>
                    <Image src={DexToolsLogo} width={100} height={100} alt=''></Image>
                  </div>
                  <div id='w-node-_57d709f0-1b94-47a6-0823-c52bf0fd7448-1c48dc11' className='partner-wrapper lowered'>
                    <Image src={EthereumLogo} width={100} height={100} alt=''></Image>
                  </div>
                </div>
                <div className='partner-column right' css={styles.position(position.right)}>
                  <div id='w-node-_2be93e76-ae42-ed47-c25e-331882d750f4-1c48dc11' className='partner-wrapper'>
                    <Image src={Coingecko1} width={100} height={100} alt=''></Image>
                  </div>
                  <div id='w-node-_2be93e76-ae42-ed47-c25e-331882d750f6-1c48dc11' className='partner-wrapper lowered'>
                    <Image src={OpenAiSvg} width={100} height={100} alt=''></Image>
                  </div>
                </div>
              </div>
              <div id='w-node-_94bbc353-5ccd-6d20-a2bc-2ea8fb9d20df-1c48dc11' className='layout192_content'>
                <div className='margin-bottom margin-xsmall'>
                  <div className='label text-align-left'>THE LEADING FORCE IN THE WEB3 AI COMPETITION</div>
                </div>
                <div className='margin-bottom margin-small'>
                  <h2 className='heading-2'>The dominant contender in the Web3 AI competition</h2>
                </div>
                <p className='text-size-medium'>
                  CompareAi utilizes its Incentive Fund to invest in further product development, aiming to enhance user productivity in the rapidly expanding
                  realm of Web3 Al. The voting power of our holders will play a pivotal role in shaping and refining our product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
