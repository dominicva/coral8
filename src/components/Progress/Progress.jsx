import progressBar from '../../assets/progress-bar.svg';
import './Progress.scss';

export default function Progress({ value }) {
  return (
    <article className="progress">
      <h2 className="progress__heading">Your progress</h2>
      <span>£520</span>
      <img src={progressBar} alt="progress bar" />
      <span className="progress_percentage">1%</span>
      <p>Keep swimming forward, you&apos;re on Octo-track!</p>
    </article>
  );
}
