import React, { useState, useEffect } from 'react';
import layer1 from '../img/layer-1.png';
import layer2 from '../img/layer-2.png';
import layer3 from '../img/layer-3.png';
import layer4 from '../img/layer-4.png';
import layer5 from '../img/layer-5.png';
import layer6 from '../img/layer-6.png';
import layer7 from '../img/layer-7.png';

import token1 from '../img/token-1.png';
import token2 from '../img/token-2.png';
import token3 from '../img/token-3.png';

const Main = () => {
    useEffect(() => {
        const heroElements = document.querySelectorAll('#hero-in-view, .heading-1, .hero-spacer, .heading-2, .heading-12-para, .hero-buttons, a.button, a.hero-second');
        heroElements.forEach((element) => {
            element.classList.add('fade-in');
        });

        const layers = document.querySelectorAll('.layer-container .layer-1, .layer-container .layer-2, .layer-container .layer-3, .layer-container .layer-4, .layer-container .layer-5, .layer-container .layer-6, .layer-container .layer-7');
        const addLayersAnimation = () => {
            layers.forEach((layer, index) => {
                layer.style.transitionDelay = `${index * 0.2}s`;
                layer.classList.add('layer-animate');
            });
        };

        const handleLayersScroll = () => {
            const layerContainer = document.querySelector('.layer-container');
            if (layerContainer) {
                const layerContainerRect = layerContainer.getBoundingClientRect();
                if (layerContainerRect.top < window.innerHeight && layerContainerRect.bottom > 0) {
                    addLayersAnimation();
                }
            }
        };

        const handleScroll = () => {
            handleLayersScroll();
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const token1 = document.querySelector('.token-1');
        const token2 = document.querySelector('.token-2');
        const token3 = document.querySelector('.token-3');
        const token4 = document.querySelector('.token-4');

        const animateTokens = () => {
            token1?.style?.setProperty('bottom', '100%');
            token1?.style?.setProperty('opacity', '1');

            token2?.style?.setProperty('bottom', '100%');
            token2?.style?.setProperty('opacity', '1');

            token3?.style?.setProperty('bottom', '100%');
            token3?.style?.setProperty('opacity', '1');

            token4?.style?.setProperty('bottom', '100%');
            token4?.style?.setProperty('opacity', '1');
        };

        animateTokens();

        // Cleanup listeners on unmount
        return () => {
            token1?.style?.setProperty('bottom', '0');
            token1?.style?.setProperty('opacity', '0');

            token2?.style?.setProperty('bottom', '0');
            token2?.style?.setProperty('opacity', '0');

            token3?.style?.setProperty('bottom', '0');
            token3?.style?.setProperty('opacity', '0');

            token4?.style?.setProperty('bottom', '0');
            token4?.style?.setProperty('opacity', '0');
        };
    }, []); // Empty dependency array to run the effect only once on mount
    useEffect(() => {
        const cards = document.querySelectorAll('.card-1, .card-2, .card-3, .card-4');

        const animateCards = () => {
            cards.forEach((card, index) => {
                const delay = index * 100;
                card.style.transition = `top 500ms ease-in-out ${delay}ms, opacity 500ms ease-in-out ${delay}ms`;
                card.style.top = '0';
                card.style.opacity = '1';
            });
        };

        const handleScroll = () => {
            const triggerOffset = window.innerHeight * 0.8; // Adjust the offset based on your needs
            const isAnimationTriggered = cards[0].getBoundingClientRect().top < triggerOffset;

            if (isAnimationTriggered) {
                animateCards();
                window.removeEventListener('scroll', handleScroll); // Remove the scroll listener after animation is triggered
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);

            // Reset styles to initial state
            cards.forEach((card, index) => {
                card.style.transition = 'none';
                card.style.top = '100px';
                card.style.opacity = '0';
            });
        };
    }, []);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqData = [
        {
            question: 'Why is the price above/below peg?',
            answer: 'The SUB token is a soft-pegged algorithmic token. Meaning that the peg only serves to alter the state of the protocol and reduce emissions when necessary. Volatility comes with all high performing assets. The volatility benefits long-term holders through the tax system and helps to attract liquidity.',
        },
        {
            question: 'How does freezing work?',
            answer: 'SUB is freely interchangeable with ABZERO at the ratio displayed as "the index." This index will only ever increase and you are always ensured to receive your corresponding SUB tokens when defrosting. The contract will never "fall short." The tax rates are also hardcoded, meaning the rate can never be increased or tampered with, even by the developers. Freezing costs 3%. Defrosting costs 17%. SUB is the liquidity token or medium of exchange, able to be freely bought and sold with minimal slippage to ensure a free and liquid market. ABZERO is the staked version of SUB, restricting the circulating supply and providing long-term holders with the highest rate of return.',
        },
        {
            question: 'Why is there a tax on freezing/defrosting?',
            answer: 'Freezing or defrosting your tokens is meant to be a conscious decision with cause and effect. It is designed to provide long-term revenue to the holders and intentionally designed to discourage selling. We strongly believe in the future of cryptocurrency. Avalanche (AVAX) has increased 100,000% since launch in just 2 years. Even in a bear market, crypto has undoubtedly been the world\'s fastest-growing asset in recent times. Despite this, it\'s estimated that up to 90% of crypto traders lose money. One reason is that many investors are looking for short-term gratification. Imagine selling Bitcoin in 2012 because of a 10% pump. A 17% tax might make you think twice, and that\'s the intention. Freezing a large percentage of the supply is core to the protocol. All of the top-20 cryptocurrencies have a significant portion of their supply staked (averaging 70% for recent top-20 entrants).',
        },
        {
            question: 'Are the contracts audited?',
            answer: 'Subzero is originally based on Tomb Finance or Basis Cash, in which, the contracts have been stress-tested many times. Where Subzero differs is in the approach to sustainability. Like most of DeFi, we can\'t say it\'s free of risk entirely, but we believe it is solid and are personally invested. Since launch, the team has only been net-buyers of the tokens, rather than sellers. Through on-market purchases, the team has bought at the same price as any other investor. That simply doesn\'t happen in other projects.',
        },
        {
            question: 'Unsure which strategy to take?',
            answer: 'There are various levels of risk and reward available. You can stake your liquidity tokens to earn ZSHARE and also earn a small amount passively through the trading volume. You can focus on ABZERO if you are looking for the most consistent rewards and have a long-term focus. If your risk tolerance is a little higher, you might consider ZSHARE, as it is used for governance of the treasury assets and provides the highest level of returns when SUB is above peg. The indexing rate on ABZERO will be variable. For this reason, we suggest taking a diversified approach, e.g., Freezing 50%, putting 30% into staked LP tokens, and 20% into Regulation (ZSHARE). If you are looking for a more passive position and have a long-term view, you may want to allocate 100% to the Freezer and then use rewards for Regulation.',
        },
    ];
    const [containerHeight, setContainerHeight] = useState(40);


    useEffect(() => {
        const updateContainerHeight = () => {
            const contentElement = document.getElementById(`content-${expandedIndex}`);
            setContainerHeight(expandedIndex === -1 || !contentElement ? 40 : contentElement.offsetHeight);
        };

        updateContainerHeight();

        window.addEventListener('resize', updateContainerHeight);

        return () => {
            window.removeEventListener('resize', updateContainerHeight);
        };
    }, [expandedIndex]);

    return (
        <main>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div id="hero-in-view"></div>
                        <h1 className="heading-1">Decentralized</h1>
                        <div className="hero-spacer"></div>
                        <h1 className="heading-2">Venture Capital</h1>
                        <p className='heading-12-para'>Subzero is a next-generation, immutable DeFi protocol on the Avalanche network. The protocol focuses on sustainable mechanisms to encourage long-term staking and providing liquidity.</p>
                        <div className="hero-buttons">
                            <a className="button" href="https://app.subzero.plus"><span className="label">Enter App</span></a><a className="hero-second" href="https://docs.subzero.plus/" target="_blank">Learn More &gt;</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature">
                <div className="feat-tl-1"></div>
                <div className="feat-tl-2"></div>
                <div className="feat-tl-3"></div>
                <div className="feat-tr-1"></div>
                <div className="feat-tr-2"></div>
                <div className="feat-tr-3"></div>
                <div className="container">
                    <div className="feature-stats">
                        <h4>SUB Price</h4>
                        <h2 className="lg-stat">$<span id="price_one">0</span><span id="price_two" className="sm-stat">.028</span></h2>
                    </div>
                    <div className="feature-stats">
                        <h4>TVL</h4>
                        <h2 className="lg-stat">$<span id="tvl_one">0</span><span id="tvl_two" className="sm-stat">.124</span></h2>
                    </div>
                    <div className="feature-stats">
                        <h4>Liquidity</h4>
                        <h2 className="lg-stat">$<span id="liquidity_one">44</span><span id="liquidity_two" className="sm-stat">K</span></h2>
                    </div>
                    <div className="feature-stats">
                        <h4>Frozen/Bonds</h4>
                        <h2 className="lg-stat">$<span id="frozen_one">37</span><span id="frozen_two" className="sm-stat">K</span></h2>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="feat-bl-1"></div>
                <div className="feat-br-1"></div>
            </section>
            <div className="feature-b-glow"></div>
            <section className="blue">
                <div className="container">
                    <div className="layer-container">
                        <div id="layer-in-view"></div>
                        <div className="layer-hover"></div>
                        <img className="layer-1" src={layer1} />
                        <img className="layer-2" src={layer2} />
                        <img className="layer-3" src={layer3} />
                        <img className="layer-4" src={layer4} />
                        <img className="layer-5" src={layer5} />
                        <img className="layer-6" src={layer6} />
                        <img className="layer-7" src={layer7} />
                    </div>

                    <div className="text-container">
                        <h4>Yield Driven</h4>
                        <h2>DeFi Ecosystem</h2>
                        <div className="clear"></div>
                        <p>The Subzero ecosystem focuses on yield generation, through smart contract automation and the deployment of resources in new and early-stage crypto ventures. Subzero utilizes a combination of governance and autonomous portfolio management strategies to maximize returns on treasury investments.</p>
                        <p>The treasury is a growing asset pool, which is displayed transparently on the blockchain and via the <a href="https://app.subzero.plus/treasury">Treasury</a> GUI. One goal of the protocol and community is to increase the pool of treasury assets and provide yield generation opportunities for holders. Manage your portfolio of Subzero and subsidiary project tokens via <a href="https://app.subzero.plus/portfolio">My Portfolio</a>.

                        </p>
                    </div>
                    <div className="clear"></div>
                    <a className="learn-more" href="https://docs.subzero.plus/vision" target="_blank">Learn More &gt;</a>
                </div>
                <div className="blue-bl-1"></div>
                <div className="blue-br-1"></div>

            </section>
            <section className="multi">
                <div className="multi-tl-bg"></div>
                <div className="multi-tr-bg"></div>
                <div className="multi-tl-1"></div>
                <div className="multi-tr-1"></div>
                <div className="container">
                    <div className="arrow-canvas-sm"></div>
                    <div className="multi-half">
                        <h4>Store of Value With</h4>
                        <h2>Real Returns</h2>
                        <p>Subzero (SUB) can be frozen to <span style={{ fontWeight: 600 }}>Absolute Zero (ABZERO)</span> to receive rewards every 6 hours from the Rewards Pool. This continually increases the index (the ratio of SUB to ABZERO tokens).</p>
                        <p>Absolute Zero earns additional rewards, which are derived from the ecosystem and the overall market activity. Due to the real-time income generation and dynamic tax system, ABZERO increases in value at a variable rate. It is a liquid-staked token, which can also be staked for compound rewards.</p>
                    </div>
                    <div className="arrow-canvas">
                        <div id="arrow-in-view"></div>
                        <div className="plus"><span className="plus-title">ABSOLUTE ZERO</span></div>
                        <div className="share"><span className="arrow-title">ZSHARE</span></div>
                        <div className="swap"><span className="arrow-title">ZSWAP</span></div>
                        <div className="bank"><span className="arrow-title">TREASURY</span></div>
                        <div className="launch"><span className="arrow-title">LAUNCHPAD</span></div>
                        <div className="tax"><span className="arrow-title">TAX</span></div>
                        <div className="a1"></div>
                        <div className="a2"></div>
                        <div className="a3"></div>
                        <div className="a4"></div>
                        <div className="a5"></div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="multi-bl-1"></div>
                <div className="multi-br-1"></div>
            </section>
            <section className="light">
                <div className="container">
                    <div className="token-container">
                        <div id="token-in-view"></div>
                        <div className="token-1-hover"></div>
                        <div className="token-2-hover"></div>
                        <div className="token-3-hover"></div>
                        <h4 className="token-1-text">Subzero (SUB)</h4>
                        <h4 className="token-2-text">Absolute Zero (ABZERO)</h4>
                        <h4 className="token-3-text">ZShare (ZSHARE)</h4>
                        <img className="token-1" src={token1} />
                        <img className="token-2" src={token2} />
                        <img className="token-3" src={token3} />
                    </div>
                    <div className="text-container">
                        <h4>Regulated Supply</h4>
                        <h2>Tokenomics</h2>
                        <div className="clear"></div>
                        <p>The Subzero protocol is self-regulating, meaning that the price and supply of the tokens are designed to operate within limits imposed by the contracts. SUB is pegged to 0.01 AVAX. When SUB is above peg, the protocol is considered in an expansionary state and ZSHARE holders can stake their shares via Regulation to earn SUB tokens.</p>
                        <p>ABZERO has  a variable rate of return, dependent on the state of the protocol and number of SUB tokens available in the Rewards Pool. Freezing SUB as ABZERO is a sign of faith in the protocol and helps SUB to maintain peg. You should read the documentation to understand the nuances and utility of each token in the ecosystem.</p>
                    </div>
                    <div className="clear"></div>
                    <a className="learn-more" href="https://docs.subzero.plus/tokens" target="_blank">Learn More &gt;</a>
                </div>
                <div className="light-bl-1"></div>
                <div className="light-br-1"></div>
            </section>
            <section className="mesh">
                <div className="container">
                    <div id="get-started"></div>
                    <h4>Get Started</h4>
                    <h2>Quick Start</h2>
                    <h2 className="sub-heading">New to this? 4 easy steps to earn yield with Subzero:</h2>
                    <div className="card-container">
                        <div id="card-in-view"></div>
                        <div className="card-style card-1">
                            <h3>1. Get Metamask</h3>
                            <h5><a href="https://metamask.io/download/" target="_blank">metamask.io</a></h5>
                            <br />
                            <p>Install the <a href="https://metamask.io/download/" target="_blank">Metamask</a> wallet browser extension on Chrome. This is your digital wallet for interacting with Web3 applications, like Subzero+. Add the <a href="https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche" target="_blank">Avalanche network</a>.</p>
                            <a className="button card-button" href="https://metamask.io/download/" target="_blank"><span className="label">Start</span></a>
                        </div>
                        <div className="card-style card-2">
                            <h3>2. Get SUBZERO</h3>
                            <h5><a href="https://zswap.plus/swap?inputCurrency=AVAX&outputCurrency=0xA0105D7fc6190598523f568001A71164341b0A22" target="_blank">zswap.plus</a></h5>
                            <br />
                            <p>Use an "onramp" like Binance to buy AVAX. Register, buy and send AVAX to your Metamask wallet. Once you have AVAX, swap it for SUB (or ZSHARE) on <a href="https://zswap.plus/swap?inputCurrency=AVAX&outputCurrency=0xA0105D7fc6190598523f568001A71164341b0A22" target="_blank">zswap.plus</a>.</p>
                            <a className="button card-button" href="https://zswap.plus/swap?inputCurrency=AVAX&outputCurrency=0xA0105D7fc6190598523f568001A71164341b0A22" target="_blank"><span className="label">Swap</span></a>
                        </div>
                        <div className="card-style card-3">
                            <h3>3. Freeze It </h3>
                            <h5><a href="https://app.subzero.plus" target="_blank">subzero.plus</a></h5>
                            <br />
                            <p>Freeze your Subzero to Absolute Zero (ABZERO) <a href="https://app.subzero.plus/freezer">via our dApp</a>. ABZERO automatically compounds (via the index) through profit sharing in Subzero's DeFi ecosystem.</p>
                            <a className="button card-button" href="https://app.subzero.plus/freezer" target="_blank"><span className="label">Freeze</span></a>
                        </div>
                        <div className="card-style card-4">
                            <h3>4. Stake it</h3>
                            <h5><a href="https://app.subzero.plus/stake" target="_blank">Single Stake</a></h5>
                            <br />
                            <p>Our team is working on increasing the range of staking options for your frozen tokens! But right now you can <a href="https://app.subzero.plus/stake">single-stake your ABZERO tokens</a> to earn ZSHARE.</p>
                            <a className="button card-button" href="https://app.subzero.plus/stake" target="_blank"><span className="label">Stake</span></a>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="pink-bl-1"></div>
                <div className="pink-br-1"></div>
            </section>
            <section className="faq-section">
                <div className="faq-tl-1"></div>
                <div className="faq-tl-2"></div>
                <div className="faq-tl-3"></div>
                <div className="faq-tr-1"></div>
                <div className="faq-tr-2"></div>
                <div className="faq-tr-3"></div>
                <div className="container">
                    <h4>Questions?</h4>
                    <h2>FAQs</h2>
                    <div className="faq">
                        {faqData.map((faq, index) => (
                            <div key={index} className={`accordion-container ${index === expandedIndex ? 'expanded' : ''}`}>
                                <div className="accordion-title" onClick={() => handleToggle(index)}>
                                    {faq.question}
                                </div>
                                <div className="accordion-content">
                                    {Array.isArray(faq.answer) ? (
                                        faq.answer.map((paragraph, i) => <p key={i}>{paragraph}</p>)
                                    ) : (
                                        <p>{faq.answer}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="faq-bl-1"></div>
                <div className="faq-br-1"></div>
                <div className="faq-b-glow"></div>
            </section>
            <section className="transparent">
                <div className="container">
                    <h4>Join Subzero on AVAX</h4>
                    <h2>Decentralized Venture Capital</h2>
                    <p>Traditional venture capital has been a restrictive process lacking in transparency. Decentralized Venture Capital (DVC) is a revolution, offering accessibility to anyone willing to participate and radical transparency. All transactions are publicly visible on the blockchain.</p>
                    <p style={{ marginBottom: "50px" }}>With Subzero you may gain access to new project launches, airdrops and yield earning opportunities. Earn consistent smart contract yield with ABZERO. Maintain ownership and governance over a growing pool of crypto assets via the treasury and earn smart contract yield from the regulation of the SUB supply with ZSHARE.</p>
                    <div className="button-sect"><a className="button" href="https://app.subzero.plus"><span className="label">Enter App</span></a></div>
                    <div className="clear"></div>
                </div>
                <div className="trans-b-glow"></div>
            </section>

        </main>
    );

};

export default Main;
