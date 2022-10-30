import {MotionConfig} from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MotionConfig
			reducedMotion="user"
			transition={{type: 'tween', ease: 'linear'}}
		>
			<App />
		</MotionConfig>
	</React.StrictMode>,
);
