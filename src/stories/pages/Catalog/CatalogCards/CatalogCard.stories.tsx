import { CatalogCard } from "../../../../ui-dsfr/components/pages/Catalog/CatalogCards/CatalogCard";
import { sectionName } from "./sectionName";
import { getStoryFactory, logCallbacks } from "../../../getStory";
import { CompiledData } from "sill-api";

const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { CatalogCard },
    "defaultContainerWidth": 450,
});

export default meta;

const software: CompiledData.Software = {
    "id": 233,
    "name": "Onyxia",
    "function":
        "Lanceur de conteneurs orienté Data science. Mise en commun de ressources matérielles (CPU/GPU/RAM)",
    "referencedSinceTime": 1640995200000,
    "isStillInObservation": false,
    "isFromFrenchPublicService": true,
    "isPresentInSupportContract": false,
    "alikeSoftwares": [
        {
            "isKnown": false,
            "softwareName": "AWS,GoogleCloudPlatform,MicrosoftAzure",
        },
    ],
    "license": "MIT",
    "contextOfUse": "Onyxia est déployé par l'INSEE sur https://datalab.sspcloud.fr",
    "mimGroup": "MIMDEVOPS",
    "versionMin": "0.26.25",
    "workshopUrls": ["https://www.dailymotion.com/video/x85y31u?playlist=x767bq"],
    "testUrls": [],
    "useCaseUrls": [],
    "wikidataData": {
        "id": "Q110492908",
        "label": {
            "en": "Onyxia",
        },
        "description": {
            "fr": "Un lanceur de conteneur orienté data science",
            "en": "A data science oriented container launcher",
        },
        "logoUrl":
            "//upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Onyxia.svg/220px-Onyxia.svg.png",
        "websiteUrl": "https://github.com/InseeFrLab/onyxia",
        "sourceUrl": "https://github.com/InseeFrLab/onyxia",
        "license": "MIT",
        "documentationUrl": undefined,
        "framaLibreId": undefined,
        "developers": [
            {
                "name": "Joseph Garrone",
                "id": "Q111738960",
            },
        ],
    },
    "comptoirDuLibreSoftware": {
        "id": 461,
        "created": "2022-01-09T18:54:43+00:00",
        "modified": "2022-01-17T08:57:54+00:00",
        "url": "https://comptoir-du-libre.org/fr/softwares/461",
        "name": "Onyxia",
        "licence": "MIT",
        "external_resources": {
            "website": "https://datalab.sspcloud.fr",
            "repository": "https://github.com/InseeFrLab/onyxia",
        },
        "providers": [],
        "users": [],
    },
    "hasExpertReferent": true,
    "referentCount": 1,
    "agentWorkstation": true,
    "tags": ["data-science", "docker", "kubernetes", "machine-learning", "python"],
    "annuaireCnllServiceProviders": [],
};

export const VueDefault = getStory({
    software,
    "declareUserOrReferent": {
        "href": "https://example.com",
        "onClick": () => {},
    },
    "editLink": {
        "href": "https://example.com",
        "onClick": () => {},
    },
    "parentSoftware": {
        "name": "Adobe Phtoshop",
        "link": undefined,
    },
    "referents": undefined,
    "userIndexInReferents": undefined,
    ...logCallbacks([
        "onLogin",
        "onDeclareReferentAnswer",
        "onUserNoLongerReferent",
        "onTagClick",
    ]),
});
