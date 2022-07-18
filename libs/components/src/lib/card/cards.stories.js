import './card';
import * as tableContent from '../../../../components/stories/demos/table.content.html';

export default {
  title: 'Components/Cards',
};

export const Basic = ({ outlined = false }) => {
  return `
    <td-card cardTitle="Card Title" ${outlined ? 'outlined' : '' }>
      ${tableContent}
      <div slot="card-actions" class="mdc-card__action-buttons">
        <button class="mdc-button mdc-card__action mdc-card__action--button">
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">Action 1</span>
        </button>
        <button class="mdc-button mdc-card__action mdc-card__action--button">
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">Action 2</span>
        </button>
      </div>
      <div slot="card-actions" class="mdc-card__action-icons">
        <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
          title="Share">share</button>
        <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
          title="More options">more_vert</button>
      </div>
    </td-card>
  `;
};

export const Outline = Basic.bind({})
Outline.args = {
  outlined: true
}