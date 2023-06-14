import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

import aboutTranslations from '../../translations/about.json';

class About extends Component {
	constructor(props) {
		super(props);

		props.addTranslation(aboutTranslations);

		this.state = {
			contactRef: React.createRef(),
		};
	}

	componentDidMount() {
        window.scrollTo(0, 0);
    }

	openGithub() {
		window.open('https://github.com/ChhoeTaigi', '_blank')
	}

	gotoContact() {
		const domNode = ReactDOM.findDOMNode(this.state.contactRef.current);
        window.scrollTo(0, domNode.offsetTop);
	}

	render() {
		return (
			<div className='about'>
				<header className='about__header'>
					<div className='container'>
						<h2><Translate id='introduction' /></h2>
					</div>
				</header>
				<section className='about__brief'>
					<div className='container'>
						<ul>
							<li><Translate id='bullet-1' /></li>
							<li><Translate id='bullet-2' /></li>
							<li>
								<Translate id="support_taibun_kesimi_part1" />
								<a target="_blank" href="https://www.zeczec.com/projects/taibun-kesimi"><Translate id="support_taibun_kesimi_part2" /></a>
								<Translate id="support_taibun_kesimi_part3" />
							</li>
						</ul>
					</div>
				</section>
				<section className='about__feature'>
					<div className='container'>
						<h2><Translate id='feature' /></h2>
						<ul>
							<li>
								<img src='images/data@2x.png' />
								<h3><Translate id='feature-title-1' /></h3>
								<div>
									<Translate id='feature-content-1' />
								</div>
							</li>
							<li>
								<img src='images/standard@2x.png' />
								<h3><Translate id='feature-title-2' /></h3>
								<div>
									<Translate id='feature-content-2' />
								</div>
							</li>
							<li>
								<img src='images/digital@2x.png' />
								<h3><Translate id='feature-title-3' /></h3>
								<div>
									<Translate id='feature-content-3' />
								</div>
							</li>
							<li>
								<img src='images/opencc@2x.png' />
								<h3><Translate id='feature-title-4' /></h3>
								<div>
									<Translate id='feature-content-4' />
								</div>
							</li>
							<li>
								<img src='images/service@2x.png' />
								<h3><Translate id='feature-title-5' /></h3>
								<div>
									<Translate id='feature-content-5' />
								</div>
							</li>
						</ul>
					</div>
				</section>
				<section className='about__join'>
					<div className='container'>
						<h2><Translate id='join' /></h2>
						<div className='about__advise'>
							<div className='about__join-img'>
								<img src='images/discuss@2x.png' />
							</div>
							<div className='about__join-content'>
								<p><Translate id='join-1' /></p>
								<button onClick={this.gotoContact.bind(this)}><Translate id='join-2' /></button>
							</div>
						</div>
						<div className='about__open-source'>
							<div className='about__join-img'>
								<img src='images/participate@2x.png' />
							</div>
							<div className='about__join-content'>
								<p><Translate id='join-3' /></p>
								<button className='btn' onClick={this.openGithub.bind(this)}>GitHub</button>
							</div>
						</div>
					</div>
				</section>
				<section className='about__kesimi'>
					<div className='container'>
						{/* <ol id='seeking-ol'>
							<li><Translate id='sponsor-1' /></li>
							<li><Translate id='sponsor-2' /></li>
						</ol> */}
						<h2><Translate id='sponsor' /></h2>
						<a href="https://www.zeczec.com/projects/taibun-kesimi" target="_blank">
							<img src='https://s3-ap-northeast-1.amazonaws.com/zeczec-prod/asset_168448_image_big.jpg?1586176499' />    
						</a>
					</div>
				</section>
				<section className='about__contact'>
					<div className='container'>
						<h2 ref={this.state.contactRef}><Translate id='contact' /></h2>
						<div className="about__contact-btns">
							<a className='btn btn--contact btn--contact-msg' href='https://m.me/ChhoeTaigi' target='_blank'>
								<Translate id='contact-1' />
							</a>
							<a className='btn btn--contact btn--contact-mail' href='mailto:taibunkesimi@gmail.com' target='_blank'>
								<Translate id='contact-2' />
							</a>
						</div>
					</div>
				</section>
				<section className='about__members'>
					<div className='container'>
						<h2><Translate id='members' /></h2>
						<ul className='members'>
							<li>
								<img className='members__img' src='images/teammember_hebi.png' />
								<div className='members__name'>Ngô͘ Hê-bí</div>
								<div className='members__title'>Sàu thô͘-kha kiam kòng cheng</div>
								<div className='members__desc'>Khiàn-phang ēng--ê. Lâi chú 1 tiáⁿ phang-kòng-kòng ê Tâi-gí moâi.</div>
							</li>
							<li>
								<img className='members__img' src='images/teammember_biooh.png' />
								<div className='members__name'>Bí-o͘h</div>
								<div className='members__title'>Tàu siat-kè bāng-chām</div>
								<div className='members__desc'>Hi-bāng koh kah a-má kìⁿ-bīn ê hit-kang góa ê Tâi-gí kah i pêⁿ hó.</div>
							</li>
							<li>
								<img className='members__img' src='images/teammember_itbin.png' />
								<div className='members__name'>I̍tBîn·BuLùSuh</div>
								<div className='members__title'>Sò͘-ūi hòa, kàu-tèng</div>
								<div className='members__desc'>Ǹg-bāng chhiâⁿ-chòe Tâi-gí ê hó kang-lâng kap sim-lêng-siōng ê a-sià.</div>
							</li>
							<li>
								<img className='members__img' src='images/teammember_sioka.png' />
								<div className='members__name'>Sió-ka</div>
								<div className='members__title'>Sò͘-ūi hòa, kàu-tèng</div>
								<div className='members__desc'>Kóng Tâi-gí, siá Tâi-bûn, chò-hóe kā lán ê bó-gí seⁿ-thòaⁿ--lo̍h-khì.</div>
							</li>
							<li>
								<img className='members__img' src='images/teammember_siotai.png' />
								<div className='members__name'>Sió-tâi</div>
								<div className='members__title'>Sò͘-ūi hòa, kàu-tèng</div>
								<div className='members__desc'>Goân-lâi jû Niau.</div>
							</li>
							<li>
								<img className='members__img' src='images/teammember_ekchai.png' />
								<div className='members__name'>Tân E̍k-châi</div>
								<div className='members__title'>Sò͘-ūi hòa, kàu-tèng</div>
								<div className='members__desc'>3 hāng kî-bōng: Tùi pîn-tōaⁿ-kut chut-gia̍p. Tâi-oân-ōe ho̍k-heng. Formosa kiàn-kok.</div>
							</li>
							<li>
								<img className='members__img' src='images/teammember_tanloo.png' />
								<div className='members__name'>Tân Lō͘</div>
								<div className='members__title'>Sò͘-ūi hòa, kàu-tèng</div>
								<div className='members__desc'>Chò-hóe lâi siá Tâi-bûn, kóng Tâi-gí, piàⁿ khí-chō Tâi-oân kok-ka ê sū-kang.</div>
							</li>
						</ul>
					</div>
				</section>
				{/* <section className='about__ex-members'>
					<div className='container'>
						<h2><Translate id='former-members' /></h2>
						<ul className='members'>
							<li>
								<img className='members__img' src='images/teammember_aiong.png' />
								<div className='members__name'>A'ióng</div>
								<div className='members__title'>阿勇台語 A'ióng Tâi-gí</div>
								<div className='members__desc'>Bí-kok lâi ê Tâi-oân sin-chū-bîn. Nńg-thé kang-têng-su. Ū-êng teh chhui-sak Tâi-gí.</div>
							</li>
						</ul>
					</div>
				</section> */}
				<section className='about__auth'>
					<div className='container'>
						<h2><Translate id='authorization' /></h2>
						<section className='about__data'>
							<h3><Translate id='authorization-1' /></h3>
							<ul>
								<li>
									<a className='authorization-link' href='https://github.com/ChhoeTaigi/ChhoeTaigiDatabase' target='_blank'>ChhoeTaigi 台語辭典⁺：台語字詞資料庫</a>
								</li>
								<li>
									<a className='authorization-link' href='https://www.pcstore.com.tw/haiang/M19279123.htm' target='_blank'>TJ台語白話小詞典</a>（索引）：<a className='authorization-link' href='http://www.atsiu.com/' target='_blank'>亞細亞國際傳播社</a>
								</li>
							</ul>
						</section>
						<section className='about__scan'>
							<h3><Translate id='authorization-2' /></h3>
							<ul>
								<li>
									<a className='authorization-link' href='http://ip194097.ntcu.edu.tw/memory/tgb/MoWT.asp' target='_blank'>台語文記憶</a>
								</li>
							</ul>
						</section>
					</div>
				</section>
				<div className='about__feedback'>
					<div className='container'>
						<h2><Translate id='opinion' /></h2>
						<a id='feedback-email' href='mailto:taibunkesimi@gmail.com'>taibunkesimi@gmail.com</a>
					</div>
				</div>
			</div>
		);
	}
}

export default withLocalize(About);