import { createRule } from '@markuplint/ml-core';

import { match } from '../helpers';

type Options = {
	ignore?: string | string[];
};

export default createRule<boolean, Options>({
	defaultSeverity: 'warning',
	defaultOptions: {},
	async verify({ document, report, t }) {
		await document.walkOn('Attr', attr => {
			if (attr.ownerElement.isCustomElement) {
				return;
			}

			const ignoreList = Array.isArray(attr.rule.option.ignore)
				? attr.rule.option.ignore
				: attr.rule.option.ignore
				? [attr.rule.option.ignore]
				: [];

			const name = attr.name;

			for (const ignore of ignoreList) {
				if (match(name, ignore)) {
					return;
				}
			}

			if (/^on/i.test(name)) {
				report({
					scope: attr,
					raw: attr.raw,
					line: attr.startLine,
					col: attr.startCol,
					message: t('{0} is disallowed', t('the "{0*}" {1}', name, 'attribute')),
				});
			}
		});
	},
});
