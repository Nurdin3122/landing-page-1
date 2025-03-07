import styles from './MainPage.module.css';

export const MainPage = () => {
	return (
		<>
			<header className={'font-montserrat leading-tight w-screen shadow-[0_4px_12px_-7px_rgba(28,_52,_88,_0.5)] rounded-[20px]'}>
				<div className={`${styles.header} container`}>
				<div>
					<a href="#" className='no-underline'>
						<img className='w-[200px]' src='/logo.png' alt='logo'/>
					</a>
				</div>
					
					<div className={`${styles.headerBlock2}`}>
						<p>База новостроек от застройщиков</p>
						<p>без посредников и переплат</p>
					</div>
					
					<div className={styles.headerBlock3}>
						<a href={'#'} className={'text-[22px] font-bold'}>8 800 250-90-03</a>
					  <p className={'text-[14px] font-light'}>Звонок бесплатный</p>
				  </div>
				</div>
			</header>
				<nav className={`${styles.navbar} container`}>
					<ul>
						<li>
							<a href={'#'}>Новостройки по городам</a>
						</li>
						<li>
							<a href={'#'}>Земельные участки</a>
						</li>
						<li>
							<a href={'#'}>Застройщики по городам</a>
						</li>
						<li>
							<a href={'#'}>События и мнения</a>
						</li>
						<li>
							<a href={'#'}>Поиск по карте</a>
						</li>
					</ul>
				</nav>
			  <main className='font-montserrat'>
				  <div className={styles.mainBlockBg}>
					  <div className={`${styles.textBlockMainBlock}`}>
						  <div className={'ml-10 mt-10 mb-10'}>
							  <h1 className={'font-semibold leading-tight text-[37px] uppercase'}>
								  ЖК "Graff Суворов"
							  </h1>
							  <p className={'font-light text-[14px] mt-3'}>
								  г. Краснодар, Центральный микрорайон
							  </p>
							  <a href={'#'} className={`${styles.linkMainBlock}`}>
								  Квартиры от 14.710.500 Р.
								</a>
						  </div>
						  
							  <button type={'button'} className={'bg-[#FF3324] px-[36px] py-[30px] rounded-[14px] flex ml-auto mr-[40px]'}>
								  <p className={`${styles.btnTextBlockMainBlock}`}>Видео о комплексе</p>
							  </button>
					  </div>
				  </div>
				  
				  <div className={'container mb-[77px]'}>
					  <div className={'w-[283px] h-[352px] shrink-0 float-left mr-[25px]'}>
						 <img alt={'#'} src={'/photo-block.jpg'} className={'w-full h-full object-cover'}/>
					  </div>
					  <div>
						  <h3 className={'font-bold text-[44px]'}>
							  Описание жилого комплекса "Graff Суворов"
						  </h3>
						  <p className={`${styles.textBlockDescription}`}>
							  Жилой комплекс "Суворов" в Краснодаре будет представлен многоэтажным жилым домом Бизнес-
							  класса. Дом имеет  монолитно-железобетонный каркас с заполнениями из пенобетонных блоков.
							</p>
						  <p className={`${styles.textBlockDescription}`}>
							  Квартиры в ЖК "Суворов" обладают высокими потолками и сдаются подготовленными под отделку.
							  Комфортабельные планировочные решения жилых площадей позволят воплотить в реальность самые
							  смелые замыслы по обустройству интерьера.
						  </p>
						  <p className={`${styles.textBlockDescription}`}>
							  К жилому дому предусмотрен обустроенный подход и подъезд с пешеходным бульваром и ландшафтным озеленением. Под территорией двора предусмотрена подземная парковка для транспортных средств. На первом этаже запроектированы помещения коммерческого назначения.
						  </p>
					  </div>
				  </div>
				  
				  <div className={'bg-[rgba(70,124,206,0.26)]'}>
					  <div className={'container pt-[123px] pb-[163px]'}>
						  <div className={'flex justify-center flex-col items-center gap-[35px] '}>
							  <h3 className={'font-bold text-[44px] leading-[60px] text-[#183359]'}>Сервис помощи в покупке
								  недвижимости</h3>
							  <p className={'font-normal text-[18px] leading-tight'}>Профессиональные помощники Yuga-Building.ru
								  помогут с покупкой квартиры на всех этапах!</p>
						  </div>
						  
						  <div className={'flex justify-center flex-row flex-wrap xl:flex-nowrap gap-[14px] mt-[50px]'}>
							  
							  <div className={`${styles.card}`}>
								  <div className={`${styles.blockImgCard}`}>
									  <img alt={'#'} src={'/card-3.svg'} className={`${styles.imgCard}`}/>
								  </div>
								  <h6 className={`${styles.mainTextCard}`}>Заявка на ипотеку</h6>
								  <p className={`${styles.textCard}`}>
									  Военная ипотека / маткапитал
									  Наши специалисты помогут открыть ипотеку под низкую процентную ставку за три дня, услуга бесплатная!
								  </p>
								  <button type={'button'} className={`${styles.bntCard}`}>Оставить заявку</button>
							  </div>
							  
							  <div className={`${styles.card}`}>
								  <div className={`${styles.blockImgCard}`}>
									  <img alt={'#'} src={'/card-2.svg'} className={`${styles.imgCard}`}/>
								  </div>
								  <h6 className={`${styles.mainTextCard}`}>Заявка на ипотеку</h6>
								  <p className={`${styles.textCard}`}>
									  Военная ипотека / маткапитал
									  Наши специалисты помогут открыть ипотеку под низкую процентную ставку за три дня, услуга бесплатная!
								  </p>
								  <button type={'button'} className={`${styles.bntCard}`}>Оставить заявку</button>
							  </div>
							  
							  <div className={`${styles.card}`}>
								  <div className={`${styles.blockImgCard}`}>
									  <img alt={'#'} src={'/card-1.svg'} className={`${styles.imgCard}`}/>
								  </div>
								  <h6 className={`${styles.mainTextCard}`}>Заявка на ипотеку</h6>
								  <p className={`${styles.textCard}`}>
									  Военная ипотека / маткапитал
									  Наши специалисты помогут открыть ипотеку под низкую процентную ставку за три дня, услуга бесплатная!
								  </p>
								  <button type={'button'} className={`${styles.bntCard}`}>Оставить заявку</button>
							  </div>
						  
						  </div>
					  </div>
				  </div>
			  </main>
		</>
	)
};