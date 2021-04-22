import * as React from 'react';
import { connect } from 'react-redux';

import { updateTheme } from '../actions/actions';

const mapDispatch = (dispatch: any) => ({
  updateTheme: (val: string) => dispatch(updateTheme(val)),
});

function Themes(props: any) {
  const themes = ['monokai', 'ambiance', 'cobalt', 'dawn', 'twilight'];

  const renderThemes = () =>
    themes.map((theme) => (
      <p id="code-theme" key={theme} onClick={() => props.updateTheme(theme)}>
        {theme}
      </p>
    ));

  return <div id="themes">{renderThemes()}</div>;
}

export default connect(null, mapDispatch)(Themes);
