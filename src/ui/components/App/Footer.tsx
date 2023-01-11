import { memo, forwardRef } from "react";
import { makeStyles, Text, LanguageSelect } from "ui/theme";
import { ReactComponent as GitHubSvg } from "ui/assets/svg/GitHub.svg";
import { useLang, useTranslation } from "ui/i18n";
import { DarkModeSwitch } from "onyxia-ui/DarkModeSwitch";
import { assert } from "tsafe/assert";
import type { Equals } from "tsafe";
import { Icon } from "ui/theme";
import { declareComponentKeys } from "i18nifty";
import type { Link } from "type-route";

export type Props = {
    packageJsonVersion: string;
    apiPackageJsonVersion: string;
    className?: string;
    termsLink: Link;
    sillJsonHref: string;
};

export const Footer = memo(
    forwardRef<any, Props>((props, ref) => {
        const {
            className,
            termsLink,
            packageJsonVersion,
            apiPackageJsonVersion,
            sillJsonHref,
            ...rest
        } = props;

        //For the forwarding, rest should be empty (typewise),
        // eslint-disable-next-line @typescript-eslint/ban-types
        assert<Equals<typeof rest, {}>>();

        const { classes, cx } = useStyles(props);

        const { t } = useTranslation({ Footer });

        const { lang, setLang } = useLang();

        const spacing = <div className={classes.spacing} />;

        return (
            <footer className={cx(classes.root, className)} ref={ref} {...rest}>
                <Text typo="body 2">2013 - 2022 SILL, DINUM</Text>
                {spacing}
                <a
                    href={"https://github.com/etalab/sill"}
                    className={classes.linkWithIcon}
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubSvg className={classes.icon} />
                    &nbsp;
                    <Text typo="body 2">{t("contribute")}</Text>
                </a>
                <div className={classes.sep} />
                <a
                    href={"https://code.gouv.fr/data/latest-sill.xml"}
                    className={classes.linkWithIcon}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon iconId="rssFeed" className={classes.icon} />
                    &nbsp;
                    <Text typo="body 2">{t("rss feed")}</Text>
                </a>
                {spacing}
                <a
                    href={sillJsonHref}
                    className={classes.linkWithIcon}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon iconId="storage" className={classes.icon} />
                    &nbsp;
                    <Text typo="body 2">sill.json</Text>
                </a>
                &nbsp;
                <a
                    href="https://code.gouv.fr/data/sill.tsv"
                    className={classes.linkWithIcon}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Text typo="body 2">.tsv</Text>
                </a>
                &nbsp;
                <a
                    href="https://code.gouv.fr/data/sill.pdf"
                    className={classes.linkWithIcon}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Text typo="body 2">.pdf</Text>
                </a>
                &nbsp;
                <a
                    href="https://code.gouv.fr/data/sill.md"
                    className={classes.linkWithIcon}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Text typo="body 2">.md</Text>
                </a>
                &nbsp;
                <a
                    href="https://code.gouv.fr/data/sill.org"
                    className={classes.linkWithIcon}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Text typo="body 2">.org</Text>
                </a>
                {spacing}
                <LanguageSelect
                    language={lang}
                    onLanguageChange={setLang}
                    variant="small"
                    changeLanguageText={t("change language")}
                />
                {spacing}
                <a {...termsLink} target="_blank" rel="noreferrer">
                    {" "}
                    <Text typo="body 2">{t("terms of service")}</Text>{" "}
                </a>
                {spacing}
                <a
                    href={`https://github.com/etalab/sill-web/releases/tag/v${packageJsonVersion}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {/*NOTE: Defined in ./config-overrides.js*/}
                    <Text typo="body 2">sill-web: v{packageJsonVersion} </Text>
                </a>
                {spacing}
                <a
                    href={`https://github.com/etalab/sill-api/releases/tag/v${apiPackageJsonVersion}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Text typo="body 2">sill-api: v{apiPackageJsonVersion} </Text>
                </a>
                {spacing}
                <DarkModeSwitch size="extra small" className={classes.darkModeSwitch} />
            </footer>
        );
    }),
);

export const { i18n } = declareComponentKeys<
    "contribute" | "terms of service" | "change language" | "rss feed"
>()({ Footer });

const useStyles = makeStyles<Props>({ "name": { Footer } })(theme => ({
    "root": {
        "backgroundColor": theme.colors.useCases.surfaces.background,
        "display": "flex",
        "alignItems": "center",
        "& a": {
            "textDecoration": "none",
            "&:hover": {
                "textDecoration": "underline",
                "textDecorationColor": theme.colors.useCases.typography.textPrimary,
            },
        },
    },
    "icon": {
        "fill": theme.colors.useCases.typography.textPrimary,
    },
    "linkWithIcon": {
        "display": "flex",
        "alignItems": "center",
    },
    "sep": {
        "flex": 1,
    },
    "spacing": {
        "width": theme.spacing(4),
    },
    "darkModeSwitch": {
        "padding": 0,
    },
}));
