import { createGlobalStyle } from 'styled-components';
// NunitoSans Font
import NunitoSansExtraLight from '../../assets/fonts/NunitoSans-ExtraLight.ttf';
import NunitoSansLight from '../../assets/fonts/NunitoSans-Light.ttf';
import NunitoSansRegular from '../../assets/fonts/NunitoSans-Regular.ttf';
import NunitoSansSemiBold from '../../assets/fonts/NunitoSans-SemiBold.ttf';
import NunitoSansBold from '../../assets/fonts/NunitoSans-Bold.ttf';
import NunitoSansExtraBold from '../../assets/fonts/NunitoSans-ExtraBold.ttf';
import NunitoSansBlack from '../../assets/fonts/NunitoSans-Black.ttf';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'NunitoSans';
    font-style: normal;
    font-weight: 200;
    src: url(${NunitoSansExtraLight});
  }

  @font-face {
    font-family: 'NunitoSans';
    font-style: normal;
    font-weight: 300;
    src: url(${NunitoSansLight});
  }

  @font-face {
    font-family: 'NunitoSans';
    font-style: normal;
    font-weight: normal;
    src: url(${NunitoSansRegular});
  }

  @font-face {
    font-family: 'NunitoSans';
    font-style: normal;
    font-weight: 600;
    src: url(${NunitoSansSemiBold});
  }

  @font-face {
    font-family: 'NunitoSans';
    font-style: normal;
    font-weight: 700;
    src: url(${NunitoSansBold});
  }

  @font-face {
    font-family: 'NunitoSans';
    font-style: normal;
    font-weight: 800;
    src: url(${NunitoSansExtraBold});
  }

  @font-face {
    font-family: 'NunitoSans';
    font-style: normal;
    font-weight: 900;
    src: url(${NunitoSansBlack});
  }
`;

export default GlobalFonts;
