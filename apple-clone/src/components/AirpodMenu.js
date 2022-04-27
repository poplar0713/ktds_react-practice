import React from 'react';

function AirpodMenu() {
  return (
    <div>
      <nav class="chapternav">
        <div>
          <ul class="nav-items">
            <li class="nav-item airpods-2gen">
              <a>
                <figure class="nav-icon"></figure>
                <span class="nav-label">
                  AirPods
                  <br />
                  2세대
                </span>
              </a>
            </li>
            <li class="nav-item airpods-3gen">
              <a>
                <figure class="nav-icon"></figure>
                <span class="nav-label">
                  AirPods
                  <br />
                  3세대
                </span>
              </a>
            </li>
            <li class="nav-item airpods-pro">
              <a>
                <figure class="nav-icon"></figure>
                <span class="nav-label">
                  AirPods Pro
                </span>
              </a>
            </li>
            <li class="nav-item airpods-max">
              <a>
                <figure class="nav-icon"></figure>
                <span class="nav-label">
                  AirPods Max
                </span>
              </a>
            </li>
            <li class="nav-item airpods-compare">
              <a>
                <figure class="nav-icon"></figure>
                <span class="nav-label">
                  비교하기
                </span>
              </a>
            </li>
            <li class="nav-item apple-music">
              <a>
                <figure class="nav-icon"></figure>
                <span class="nav-label">
                  Apple Music
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="ribbon ribbon-blue-to-default ribbon-drop-wrapper apple-music-ribbon" data-analytics-activitymap-region-id="ribbon">
			<div class="ribbon-content-wrapper ribbon-reduced-wrapper ribbon-wrapper">
				<div class="ribbon-content">
					<p>AirPods을 구입하면 Apple&nbsp;Music이 6개월 무료.<span class="footnote footnote-supglyph"><a href="#footnote-1" aria-label="Footnote * 기호">*</a></span> <a class="ribbon-link more icon icon-copy icon-after icon-chevronright" href="https://offers.applemusic.apple/ko-kr/six-month-offer" rel="nofollow" data-analytics-title="learn more about the Apple Music free trial" aria-label="Apple Music 무료 체험에 대해 더 알아보기" data-analytics-exit-link="">더 알아보기 &gt;</a></p>
				</div>
			</div>
		</div>
    </div>
  );
}

export default AirpodMenu;
