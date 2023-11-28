<script>
	import { page } from '$app/stores';

	// export let onClick = () => {};
</script>

<header id='sidebar'>
	<nav>
		<ul>
			<li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">世界和图中文教育学会</a>
            </li>
            <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">学会宗旨与使命</a>
			</li>
            <li aria-current={$page.url.pathname === '/sverdle' ? 'page' : undefined}>
				<a href="/sverdle">学会工作与目标</a>
			</li>
            <li aria-current={$page.url.pathname === '/2' ? 'page' : undefined}>
				<a href="/2">认识我们的团队</a>
			</li>
		</ul>

        <ul>
			<li class='h3' aria-current={$page.url.pathname === '/3' ? 'page' : undefined}>
				<a href="/3">世界和图中文教程</a>
            </li>
            <li aria-current={$page.url.pathname === '/4' ? 'page' : undefined}>
				<a href="/4">二十年回眸</a>
			</li>
            <li aria-current={$page.url.pathname === '/5' ? 'page' : undefined}>
				<a href="/5">教程体系</a>
			</li>
            <li aria-current={$page.url.pathname === '/6' ? 'page' : undefined}>
				<a href="/6">原创主课板块</a>
			</li>
            <li aria-current={$page.url.pathname === '/7' ? 'page' : undefined}>
				<a href="/7">原创教学法</a>
			</li>
		</ul>

        <ul>
			<li class='h3' aria-current={$page.url.pathname === '/8' ? 'page' : undefined}>
				<a href="/8">华德福教育</a>
            </li>
            <li aria-current={$page.url.pathname === '/9' ? 'page' : undefined}>
				<a href="/9">什么是华德福教育</a>
			</li>
            <li aria-current={$page.url.pathname === '/10' ? 'page' : undefined}>
				<a href="/10">华德福教育的基础</a>
			</li>
            <li aria-current={$page.url.pathname === '/11' ? 'page' : undefined}>
				<a href="/11">华德福教育的益处</a>
			</li>
            <li aria-current={$page.url.pathname === '/12' ? 'page' : undefined}>
				<a href="/12">华德福教师的核心角色</a>
			</li>
            <li aria-current={$page.url.pathname === '/13' ? 'page' : undefined}>
				<a href="/13">华德福教育的缘起</a>
			</li>
		</ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/14' ? 'page' : undefined}>
				<a href="/14">培训课程</a>
            </li>
            <li aria-current={$page.url.pathname === '/15' ? 'page' : undefined}>
				<a href="/15">培训概述</a>
			</li>
            <li aria-current={$page.url.pathname === '/16' ? 'page' : undefined}>
				<a href="/16">世界和图中文教师证书</a>
			</li>
            <li aria-current={$page.url.pathname === '/17' ? 'page' : undefined}>
				<a href="/17">华德福中文教师证书</a>
			</li>
            <li aria-current={$page.url.pathname === '/18' ? 'page' : undefined}>
				<a href="/18">人智学与中国文化基础证书</a>
			</li>
            <li aria-current={$page.url.pathname === '/19' ? 'page' : undefined}>
				<a href="/19">转化课程</a>
			</li>
            <li aria-current={$page.url.pathname === '/20' ? 'page' : undefined}>
				<a href="/20">全科证书</a>
			</li>
            <li aria-current={$page.url.pathname === '/21' ? 'page' : undefined}>
				<a href="/21">教师团队</a>
			</li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/22' ? 'page' : undefined}>
				<a href="/22">免费课程</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/23' ? 'page' : undefined}>
				<a href="/23">培训报名注册</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/24' ? 'page' : undefined}>
				<a href="/24">世界和图中文教育<br />资料馆</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/25' ? 'page' : undefined}>
				<a href="/25">邀约与合作</a>
            </li>
            <li aria-current={$page.url.pathname === '/26' ? 'page' : undefined}>
				<a href="/26">会员</a>
			</li>
            <li aria-current={$page.url.pathname === '/27' ? 'page' : undefined}>
				<a href="/27">中文教学机构</a>
			</li>
            <li aria-current={$page.url.pathname === '/28' ? 'page' : undefined}>
				<a href="/28">其他组织团体</a>
			</li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/29' ? 'page' : undefined}>
				<a href="/29">出版物</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/30' ? 'page' : undefined}>
				<a href="/30">博客</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/31' ? 'page' : undefined}>
				<a href="/31">相关链接</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/32' ? 'page' : undefined}>
				<a href="/32">常见问题回答</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/33' ? 'page' : undefined}>
				<a href="/33">捐款</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/34' ? 'page' : undefined}>
				<a href="/34">会员登录</a>
            </li>
        </ul>
	</nav>
</header>

<style>
	header {
		padding: 0 10px;
		height: calc(100vh - var(--header-height));
		background-color: white;
		overflow-y: auto;
	}

	ul {
		list-style-type: none;
		margin-left: 10px;
		margin-bottom: 20px;
	}

    .h3 {
		font-size: large;
        font-weight: bold;
		margin-top: 10px;
	}

	li {
		border: 2px solid transparent;
		border-radius: 10px;
		font-size: medium;
		padding-bottom: 2px;
        position: relative;
	}

    li[aria-current='page']::before {
		--size: 14px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: calc(50% - var(--size));
		left: calc(-2rem + var(--size) / 2);
		border: var(--size) solid transparent;
		border-left: var(--size) solid var(--primary-red);
	}

    li[aria-current='page'] a {
		color: var(--primary-red-light);
	}

	li:hover, li:hover a {
		background-color: var(--primary-red-light);
		color: white;
	}

    nav a {
        color: inherit;
        text-decoration: none;
    }
</style>
