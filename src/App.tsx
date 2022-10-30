import axios from 'axios';
import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';

interface ILink {
	title: string;
	url: string;
	domain: string;
	disabled: boolean;
}
const MockData: ILink[] = [
	{
		title: 'Facebook',
		domain: 'facebook.com',
		url: 'https://facebook.com',
		disabled: false,
	},
	{
		title: 'Twitter',
		domain: 'twitter.com',
		url: 'https://twitter.com',
		disabled: false,
	},
	{
		title: 'Github',
		domain: 'github.com',
		url: 'https://github.com',
		disabled: false,
	},
	{
		title: 'Discord server',
		domain: 'discord.gg',
		url: 'https://discord.gg',
		disabled: true,
	},
	{
		title: 'Facebook',
		domain: 'facebook.com',
		url: 'https://facebook.com',
		disabled: false,
	},
	{
		title: 'Twitter',
		domain: 'twitter.com',
		url: 'https://twitter.com',
		disabled: false,
	},
	{
		title: 'Github',
		domain: 'github.com',
		url: 'https://github.com',
		disabled: false,
	},
	{
		title: 'Discord server',
		domain: 'discord.gg',
		url: 'https://discord.gg',
		disabled: true,
	},
	{
		title: 'Facebook',
		domain: 'facebook.com',
		url: 'https://facebook.com',
		disabled: false,
	},
	{
		title: 'Twitter',
		domain: 'twitter.com',
		url: 'https://twitter.com',
		disabled: false,
	},
	{
		title: 'Github',
		domain: 'github.com',
		url: 'https://github.com',
		disabled: false,
	},
	{
		title: 'Discord server',
		domain: 'discord.gg',
		url: 'https://discord.gg',
		disabled: true,
	},
];

interface GithubResponse {
	avatar_url: string;
	bio: string;
	blog: string;
	company: null;
	created_at: Date;
	email: null;
	events_url: string;
	followers: number;
	followers_url: string;
	following: number;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	hireable: null;
	html_url: string;
	id: number;
	location: string;
	login: string;
	name: string;
	node_id: string;
	organizations_url: string;
	public_gists: number;
	public_repos: number;
	received_events_url: string;
	repos_url: string;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	twitter_username: string;
	type: string;
	updated_at: Date;
	url: string;
}

function LinkButton({
	title,
	domain,
	url,
	disabled,
	index,
}: ILink & {index: number}) {
	return (
		<motion.a
			href={url}
			target="_blank"
			rel="noreferrer"
			title={title}
			className={`flex items-center gap-2 w-full h-fit max-w-lg px-4 py-2 bg-transparent hover:bg-mbaharip-primary justify-center font-bold rounded-full transition border border-mbaharip-primary relative ${
				disabled && 'saturate-0 pointer-events-none'
			}`}
			initial={{x: index % 2 === 0 ? 50 : -50, opacity: 0}}
			animate={{
				x: 0,
				opacity: 1,
				transition: {
					type: 'tween',
					delay: 1.1 + index * 0.1,
					duration: 0.5,
					ease: 'linear',
				},
			}}
		>
			<img
				src={`https://www.google.com/s2/favicons?sz=128&domain=${domain}`}
				alt={title}
				className="w-6 h-6 rounded-lg absolute left-4"
			/>
			{title}
		</motion.a>
	);
}

function App() {
	const [isMounted, setIsMounted] = useState(false);
	const [githubStatus, setGithubStatus] = useState<GithubResponse | null>(null);
	const [linksData, setLinksData] = useState<ILink[]>([]);

	useEffect(() => {
		setIsMounted(false);
		const fetchGithubStatus = axios
			.get('https://api.github.com/users/mbaharip')
			.then((response) => {
				setGithubStatus(response.data);
			});
		const fetchLinks = axios
			.get('https://cdn.mbaharip.me/api?path=/test.json&raw=true')
			.then((response) => {
				setLinksData(response.data.data);
			})
			.finally(() => {
				setIsMounted(true);
			});
	}, []);

	if (!isMounted) {
		return <></>;
	}

	return (
		<>
			<div className="bg-mbaharip-dark text-mbaharip-light w-screen h-screen flex flex-col items-center justify-center px-4 overflow-clip">
				{/* Logo */}
				<div className="flex flex-col items-center gap-2 w-full">
					<motion.img
						src="/light.svg"
						alt="mbahArip"
						className="w-72 md:w-96"
						initial={{opacity: 0, y: -100}}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 1,
							},
						}}
					/>
					<motion.span
						className="text-xs md:text-sm"
						initial={{opacity: 0}}
						animate={{
							opacity: 1,
							transition: {
								delay: 1,
								duration: 1,
							},
						}}
					>
						{githubStatus?.bio}
					</motion.span>
				</div>
				<div className="flex flex-col items-center gap-2 w-full max-w-xl my-8 max-h-[50vh] md:max-h-[60vh] overflow-auto overflow-x-hidden rounded-lg">
					{linksData.map((link, index) => (
						<LinkButton key={index} {...link} index={index} />
					))}
				</div>
			</div>
			{/* Footer */}
			<motion.div
				className="fixed bottom-2 left-0 w-screen text-center text-xs opacity-75 text-mbaharip-light"
				initial={{opacity: 0}}
				animate={{opacity: 1, transition: {duration: 0.5}}}
			>
				&copy; {new Date().getFullYear()} mbahArip
			</motion.div>
		</>
	);
}

export default App;
