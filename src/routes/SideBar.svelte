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
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">认识我们的团队</a>
			</li>
		</ul>

        <ul>
			<li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">世界和图中文教程</a>
            </li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">二十年回眸</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">教程体系</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">原创主课板块</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">原创教学法</a>
			</li>
		</ul>

        <ul>
			<li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">华德福教育</a>
            </li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">什么是华德福教育</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">华德福教育的基础</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">华德福教育的益处</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">华德福教师的核心角色</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">华德福教育的缘起</a>
			</li>
		</ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">培训课程</a>
            </li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">培训概述</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">世界和图中文教师证书</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">华德福中文教师证书</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">人智学与中国文化基础证书</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">转化课程</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">全科证书</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">教师团队</a>
			</li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">免费课程</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">培训报名注册</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">世界和图中文教育<br />资料馆</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">邀约与合作</a>
            </li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">会员</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">中文教学机构</a>
			</li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">其他组织团体</a>
			</li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">出版物</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">博客</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">相关链接</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">常见问题回答</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">捐款</a>
            </li>
        </ul>

        <ul>
            <li class='h3' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">会员登录</a>
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
