// Links: https://github.com/carloscuesta/gitmoji/blob/master/packages/gitmojis/src/gitmojis.json
import * as vscode from 'vscode';

interface gitmojiList {
  readonly emoji: any;
  readonly code: any;
  readonly description: any;
}

let Gitmoji: Array<gitmojiList> = [
  {
    emoji: 'chore: 🎨',
    code: ':art:',
    description: vscode.l10n.t('Improve structure/format of the code'),
  },
  {
    emoji: 'perf: ⚡️',
    code: ':zap:',
    description: vscode.l10n.t('Improve performance'),
  },
  {
    emoji: 'chore: 🔥',
    code: ':fire:',
    description: vscode.l10n.t('Remove code or files'),
  },
  {
    emoji: 'fix: 🐛',
    code: ':bug:',
    description: vscode.l10n.t('Fix a bug'),
  },
  {
    emoji: 'fix: 🚑',
    code: ':ambulance:',
    description: vscode.l10n.t('Critical hotfix'),
  },
  {
    emoji: 'feat: ✨',
    code: ':sparkles:',
    description: vscode.l10n.t('Introduce new features'),
  },
  {
    emoji: 'docs: 📝',
    code: ':memo:',
    description: vscode.l10n.t('Add or update documentation'),
  },
  {
    emoji: 'feat: 🚀',
    code: ':rocket:',
    description: vscode.l10n.t('Deploy stuff'),
  },
  {
    emoji: 'style: 💄',
    code: ':lipstick:',
    description: vscode.l10n.t('Add or update the UI and style files'),
  },
  {
    emoji: 'feat: 🎉',
    code: ':tada:',
    description: vscode.l10n.t('Begin a project'),
  },
  {
    emoji: 'test: ✅',
    code: ':white_check_mark:',
    description: vscode.l10n.t('Add, update, or pass tests'),
  },
  {
    emoji: 'fix: 🔒️',
    code: ':lock:',
    description: vscode.l10n.t('Fix security issues'),
  },
  {
    emoji: 'feat: 🔐',
    code: ':closed_lock_with_key:',
    description: vscode.l10n.t('Add or update secrets'),
  },
  {
    emoji: 'feat: 🔖',
    code: ':bookmark:',
    description: vscode.l10n.t('Release/Version tags'),
  },
  {
    emoji: 'chore: 🚨',
    code: ':rotating_light:',
    description: vscode.l10n.t('Fix compiler/linter warnings'),
  },
  {
    emoji: 'feat: 🚧',
    code: ':construction:',
    description: vscode.l10n.t('Work in progress'),
  },
  {
    emoji: 'ci: 💚',
    code: ':green_heart:',
    description: vscode.l10n.t('Fix CI Build'),
  },
  {
    emoji: 'feat: ⬇️',
    code: ':arrow_down:',
    description: vscode.l10n.t('Downgrade dependencies'),
  },
  {
    emoji: 'feat: ⬆️',
    code: ':arrow_up:',
    description: vscode.l10n.t('Upgrade dependencies'),
  },
  {
    emoji: 'feat: 📌',
    code: ':pushpin:',
    description: vscode.l10n.t('Pin dependencies to specific versions'),
  },
  {
    emoji: 'ci: 👷',
    code: ':construction_worker:',
    description: vscode.l10n.t('Add or update CI build system'),
  },
  {
    emoji: 'chore: 📈',
    code: ':chart_with_upwards_trend:',
    description: vscode.l10n.t('Add or update analytics or track code'),
  },
  {
    emoji: 'refactor: ♻️',
    code: ':recycle:',
    description: vscode.l10n.t('Refactor code'),
  },
  {
    emoji: 'feat: ➕',
    code: ':heavy_plus_sign:',
    description: vscode.l10n.t('Add a dependency'),
  },
  {
    emoji: 'feat: ➖',
    code: ':heavy_minus_sign:',
    description: vscode.l10n.t('Remove a dependency'),
  },
  {
    emoji: 'feat: 🔧',
    code: ':wrench:',
    description: vscode.l10n.t('Add or update configuration files'),
  },
  {
    emoji: 'feat: 🔨',
    code: ':hammer:',
    description: vscode.l10n.t('Add or update development scripts'),
  },
  {
    emoji: 'feat: 🌐',
    code: ':globe_with_meridians:',
    description: vscode.l10n.t('Internationalization and localization'),
  },
  {
    emoji: 'fix: ✏️',
    code: ':pencil2:',
    description: vscode.l10n.t('Fix typos'),
  },
  {
    emoji: 'feat:💩',
    code: ':poop:',
    description: vscode.l10n.t('Write bad code that needs to be improved'),
  },
  {
    emoji: 'feat: ⏪',
    code: ':rewind:',
    description: vscode.l10n.t('Revert changes'),
  },
  {
    emoji: 'feat: 🔀',
    code: ':twisted_rightwards_arrows:',
    description: vscode.l10n.t('Merge branches'),
  },
  {
    emoji: 'feat: 📦',
    code: ':package:',
    description: vscode.l10n.t('Add or update compiled files or packages'),
  },
  {
    emoji: 'feat: 👽️',
    code: ':alien:',
    description: vscode.l10n.t('Update code due to external API changes'),
  },
  {
    emoji: 'chore: 🚚',
    code: ':truck:',
    description: vscode.l10n.t('Move or rename resources (e.g.: files, paths, routes)'),
  },
  {
    emoji: 'docs: 📄',
    code: ':page_facing_up:',
    description: vscode.l10n.t('Add or update license'),
  },
  {
    emoji: 'feat: 💥',
    code: ':boom:',
    description: vscode.l10n.t('Introduce breaking changes'),
  },
  {
    emoji: 'feat: 🍱',
    code: ':bento:',
    description: vscode.l10n.t('Add or update assets'),
  },
  {
    emoji: 'feat: ♿️',
    code: ':wheelchair:',
    description: vscode.l10n.t('Improve accessibility'),
  },
  {
    emoji: 'feat: 💡',
    code: ':bulb:',
    description: vscode.l10n.t('Add or update comments in source code'),
  },
  {
    emoji: 'feat: 🍻',
    code: ':beers:',
    description: vscode.l10n.t('Write code drunkenly'),
  },
  {
    emoji: 'feat: 💬',
    code: ':speech_balloon:',
    description: vscode.l10n.t('Add or update text and literals'),
  },
  {
    emoji: 'feat: 🗃️',
    code: ':card_file_box:',
    description: vscode.l10n.t('Perform database related changes'),
  },
  {
    emoji: 'feat: 🔊',
    code: ':loud_sound:',
    description: vscode.l10n.t('Add or update logs'),
  },
  {
    emoji: 'feat: 🔇',
    code: ':mute:',
    description: vscode.l10n.t('Remove logs'),
  },
  {
    emoji: 'feat: 👥',
    code: ':busts_in_silhouette:',
    description: vscode.l10n.t('Add or update contributor(s)'),
  },
  {
    emoji: 'feat: 🚸',
    code: ':children_crossing:',
    description: vscode.l10n.t('Improve user experience/usability'),
  },
  {
    emoji: 'feat: 🏗️',
    code: ':building_construction:',
    description: vscode.l10n.t('Make architectural changes'),
  },
  {
    emoji: 'style: 📱',
    code: ':iphone:',
    description: vscode.l10n.t('Work on responsive design'),
  },
  {
    emoji: 'feat: 🤡',
    code: ':clown_face:',
    description: vscode.l10n.t('Mock things'),
  },
  {
    emoji: 'feat: 🥚',
    code: ':egg:',
    description: vscode.l10n.t('Add or update an easter egg'),
  },
  {
    emoji: 'chore: 🙈',
    code: ':see_no_evil:',
    description: vscode.l10n.t('Add or update a .gitignore file'),
  },
  {
    emoji: 'feat: 📸',
    code: ':camera_flash:',
    description: vscode.l10n.t('Add or update snapshots'),
  },
  {
    emoji: 'feat: ⚗️',
    code: ':alembic:',
    description: vscode.l10n.t('Perform experiments'),
  },
  {
    emoji: 'feat: 🔍',
    code: ':mag:',
    description: vscode.l10n.t('Improve SEO'),
  },
  {
    emoji: 'feat: 🏷️',
    code: ':label:',
    description: vscode.l10n.t('Add or update types'),
  },
  {
    emoji: 'feat: 🌱',
    code: ':seedling:',
    description: vscode.l10n.t('Add or update seed files'),
  },
  {
    emoji: 'feat: 🚩',
    code: ':triangular_flag_on_post:',
    description: vscode.l10n.t('Add, update, or remove feature flags'),
  },
  {
    emoji: 'feat: 🥅',
    code: ':goal_net:',
    description: vscode.l10n.t('Catch errors'),
  },
  {
    emoji: 'feat: 💫',
    code: ':dizzy:',
    description: vscode.l10n.t('Add or update animations and transitions'),
  },
  {
    emoji: 'feat: 🗑️',
    code: ':wastebasket:',
    description: vscode.l10n.t('Deprecate code that needs to be cleaned up'),
  },
  {
    emoji: 'feat: 🛂',
    code: ':passport_control:',
    description: vscode.l10n.t('Work on code related to authorization, roles and permissions'),
  },
  {
    emoji: 'fix: 🩹',
    code: ':adhesive_bandage:',
    description: vscode.l10n.t('Simple fix for a non-critical issue'),
  },
  {
    emoji: 'chore: 🧐',
    code: ':monocle_face:',
    description: vscode.l10n.t('Data exploration/inspection'),
  },
  {
    emoji: 'chore: ⚰️',
    code: ':coffin:',
    description: vscode.l10n.t('Remove dead code'),
  },
  {
    emoji: 'test: 🧪',
    code: ':test_tube:',
    description: vscode.l10n.t('Add a failing test'),
  },
  {
    emoji: 'feat: 👔',
    code: ':necktie:',
    description: vscode.l10n.t('Add or update business logic'),
  },
  {
    emoji: 'feat: 🩺',
    code: ':stethoscope:',
    description: vscode.l10n.t('Add or update healthcheck'),
  },
  {
    emoji: 'feat: 🧱',
    code: ':bricks:',
    description: vscode.l10n.t('Infrastructure related changes'),
  },
  {
    emoji: 'chore: 🧑‍💻',
    code: ':technologist:',
    description: vscode.l10n.t('Improve developer experience'),
  },
  {
    emoji: 'feat: 💸',
    code: ':money_with_wings:',
    description: vscode.l10n.t('Add sponsorships or money related infrastructure'),
  },
  {
    emoji: 'feat: 🧵',
    code: ':thread:',
    description: vscode.l10n.t('Add or update code related to multithreading or concurrency'),
  },
  {
    emoji: 'feat: 🦺',
    code: ':safety_vest:',
    description: vscode.l10n.t('Add or update code related to validation'),
  },
  {
    emoji: 'feat: 🐳',
    code: ':whale:',
    description: vscode.l10n.t('Add or update code related to Docker'),
  },
  {
    emoji: 'feat: 🕸️',
    code: ':spider_web:',
    description: vscode.l10n.t('Add or update code related to Kubernetes'),
  },
];

export default Gitmoji;
