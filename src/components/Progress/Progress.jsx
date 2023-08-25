import progressBar from '../../assets/progress-bar.svg';
import './Progress.scss';

export default function Progress() {
  return (
    <article className="progress">
      <h2 className="progress__heading">Your progress</h2>
      <span className="progress__savings">£520</span>
      <img src={progressBar} alt="progress bar" className="progress__bar" />
      <span className="progress__percentage">1%</span>
      <p className="progress__text">
        Keep swimming forward, you&apos;re on Octo-track!
      </p>
    </article>
  );
}
