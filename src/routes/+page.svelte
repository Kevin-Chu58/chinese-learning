<script>
	import IconicCircle from "../components/IconicCircle.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<code class='javascript'>
		<IconicCircle
			texts={["扎根本土筑基民族魂", "面向世界融贯意识心"]}
			linkText="2023/2024世界和图中文师资培训项目已开启"
			linkHref="/about"
		/>
	</code>

	<div class="content-container">
		<!-- <span class='text'>世界和图中文教育学会</span> -->
		<svg viewBox="0 0 1500 100" aria-hidden="true">
			<path d="M 0 0 L 0 30 Q 300 100 700 50 Q 1100 0 1500 50 L 1500 0 Z" />
		</svg>
		<div class="gallery-container">
			<div class="gallery">
				<div class="image-container">
					<svg viewBox="0 0 300 160" aria-hidden="true">
						<path d="M 0 0 L 300 0 L 300 160 L 0 160 Z" />
					</svg>
				</div>
				<div class="link-button">
					<button>
						<a href="/">
							了解世界和图中文教育学会
						</a>
					</button>
				</div>
			</div>
			<div class="context">
				世界和图中文教育学会<br />
				倡导面向未来的中文教育<br />
				以根植于东方的文明、文化和思维，<br />
				并支持儿童身心健康发展的华德福教育理念，<br />
				以期让越来越多的中外孩子<br />
				在获得汉语技能的同时，<br />
				有缘走进最古老而又从未间断的东方文明，<br />
				共享其智慧果实<br />
				由不同走向共同<br />
				成为真正的世界公民
			</div>
		</div>
		<svg viewBox="0 0 1500 100" aria-hidden="true">
			<path d="M 0 100 L 0 30 Q 300 100 700 50 Q 1100 0 1500 50 L 1500 100 Z" />
		</svg>
	</div>
	
		<h3>
			教育是改变社会的力量。<br />
			作为师者，永远是黑暗中的火炬手，是时代迷雾的灯塔。<br />
			如果您热爱教育和孩子，<br />
			热爱自然与艺术，<br />
			热衷于探索宇宙和生命的真相，<br />
			欢迎您的加入，成为我们的一员。<br />
			用教育让民族精神源泉，注入我们的血液；<br />
			用合作的智慧，超越血缘与民族，<br />
			融聚人类的终极关怀。
		</h3>
		<a href='/'>了解世界和图中文培训课程</a>
	
		<h3>培训反馈（选择两位老师对培训课程的评价）</h3>
		<a href='/'>加入课程</a>
	
		<h3>
			世界和图中文教程<br />
			源于中国传统文化和华德福教育的双重启迪，<br />
			历经二十年的发展历程，<br />
			形成了汉语作为外语的教学大纲<br />
			汉语作为母语的1-12年级教学大纲<br />
			双语的教学大纲，<br />
			是适合世界各地全日制学校、<br />
			周末学校、课后班、家庭学校、社区学校等<br />
			进行汉语教学的一套完备的中文课程。<br />
			并且教程的所有内容及方法<br />
			与中国人思维中象数理气四元素同构，<br />
			与学生不同年龄的生理心理特征相匹配，<br />
			整个教程形成天-语-人合一的和谐境界。
		</h3>
		<a href='/'>了解世界和图中文教程</a>
	
		<h3>
			学会热情欢迎各类合作<br />
			世界和图中文教程在二十年的发展中<br />
			积累了丰硕的教学成果<br />
			愿意走出课堂，走向社会<br />
			和我们有着相同理念的<br />
			教学机构、文化组织、社会团体合作，<br />
			共同推进中文教育品质的提升<br />
			促进中华文化交流与创新<br />
			开展有益社区和谐发展的各类活动或公益项目<br />
			共同为孩子创造一个能支持他们身心健康发展的<br />
			学习、生活以及社区环境
		</h3>
		<a href='/'>了解合作方案</a>
	
		<h3>选择一篇近期的向东方美篇中的图片、视频配上简要文字介绍</h3>
		<a href='/'>浏览官方博客</a>
	
		<h3>
			保持联系<br />
			加入我们的邮件通讯<br />
			接收学会最新消息、培训及活动信息<br />
			请放心，您的信息不会被分享
		</h3>

	

	<h3>
		姓名框（可填写）<br />
		邮箱框（可填写）<br />
		捐款（可点击）
	</h3>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: left;
		height: calc(100vh - var(--header-height));
		overflow-y: auto;
	}

	div, a {
		font-family: "KaiTi";
		font-weight: bold;
	}

	.content-container {
		background-color: var(--primary-red);
	}

	.gallery-container {
		display: flex;
		justify-content: center;
	}

	.gallery, .context {
		padding-bottom: 50px;
		width: 50vw;
		font-size: 24px;
		color: white;
		text-align: center;
	}

	.image-container {
		padding: 30px 150px 30px 150px;
	}

	svg {
		display: block;
	}

	path {
		fill: white;
	}

	.link-button {
        text-align: center;
    }

    button a {
        cursor: pointer;
        display: inline-block;
        position: relative;
		color: white;
        transition: 0.5s;
        font-size: 20px;
    }

    button a:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }

    button:hover a {
        padding-right: 25px;
    }

    button:hover a:after {
        opacity: 1;
        right: 0;
    }

	/* svg {
		width: 110vw;
		height: 40px;
	} */

	/* .text {
		-webkit-text-fill-color: transparent;
		background-clip: text;
		background-image: var(--primary-linear);
		background-size: 100%;
	} */
</style>
