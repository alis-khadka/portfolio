import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './Resume.scss';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import cv from './Prashant-CV.pdf';

function Resume() {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	return (
		<div className='resume-wrapper'>
			<Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
				<Viewer
					fileUrl={cv}
					plugins={[defaultLayoutPluginInstance]}
					theme='dark'
					defaultScale={1.5}
				/>
			</Worker>
		</div>
	);
}

export default Resume;
