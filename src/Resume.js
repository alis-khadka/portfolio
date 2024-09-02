import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './Resume.scss';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { SpecialZoomLevel } from '@react-pdf-viewer/core';

import resume from './Resume.pdf';

function Resume() {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	return (
		<div className='resume-wrapper'>
			<Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
				<Viewer
					fileUrl={resume}
					plugins={[defaultLayoutPluginInstance]}
					theme='dark'
					defaultScale={SpecialZoomLevel.PageFit}
				/>
			</Worker>
		</div>
	);
}

export default Resume;
