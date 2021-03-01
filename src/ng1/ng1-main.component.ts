import { heroAppModule } from './ng1-app.module';

heroAppModule
  .component('mainNg1', {
    template: `
    <div class="ng1">
      <ul>
        <li><a ui-sref="about" ui-sref-active="active">Grid Test</a></li>
      </ul>

      <div ui-view></div>
    </div>
  `
  });

