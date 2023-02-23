import { assert } from "tsafe/assert";
import type { Equals } from "tsafe";
import { ReactComponent as TourSvg } from "./../assets/svg/Tour.svg";
import { ReactComponent as ServicesSvg } from "./../assets/svg/Services.svg";
import { ReactComponent as SecretsSvg } from "./../assets/svg/Secrets.svg";
import { ReactComponent as AccountSvg } from "./../assets/svg/Account2.svg";
import { ReactComponent as HomeSvg } from "./../assets/svg/Home2.svg";
import { ReactComponent as FilesSvg } from "./../assets/svg/Files.svg";
import { ReactComponent as CollaborationToolsSvg } from "./../assets/svg/CollaborationTools.svg";
import { ReactComponent as BashSvg } from "./../assets/svg/Bash.svg";
import { ReactComponent as CatalogSvg } from "./../assets/svg/Catalog.svg";
import { ReactComponent as KeySvg } from "./../assets/svg/Key.svg";
import { ReactComponent as TrainingsLogoSvg } from "ui/assets/svg/Trainings2.svg";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import GradingIcon from "@mui/icons-material/Grading";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import DeleteIcon from "@mui/icons-material/Delete";
import PublicIcon from "@mui/icons-material/Public";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CachedIcon from "@mui/icons-material/Cached";
import CloseSharp from "@mui/icons-material/CloseSharp";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import TranslateIcon from "@mui/icons-material/Translate";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LanguageIcon from "@mui/icons-material/Language";
import GetAppIcon from "@mui/icons-material/GetApp";
import ReplayIcon from "@mui/icons-material/Replay";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CodeIcon from "@mui/icons-material/Code";
import LinkIcon from "@mui/icons-material/Link";
import ComputerIcon from "@mui/icons-material/Computer";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import PeopleIcon from "@mui/icons-material/People";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AirplayIcon from "@mui/icons-material/Airplay";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StorageIcon from "@mui/icons-material/Storage";
import HttpIcon from "@mui/icons-material/Http";

export const createIconParams = {
    "http": HttpIcon,
    "delete": DeleteIcon,
    "edit": EditIcon,
    "add": AddIcon,
    "filterNone": FilterNoneIcon,
    "check": CheckIcon,
    "expandMore": ExpandMoreIcon,
    "attachMoney": AttachMoneyIcon,
    "chevronLeft": ChevronLeftIcon,
    "cached": CachedIcon,
    "close": CloseSharp,
    "infoOutlined": InfoOutlinedIcon,
    "brightness7": Brightness7Icon,
    "brightness4": Brightness4Icon,
    "translate": TranslateIcon,
    "visibility": VisibilityIcon,
    "visibilityOff": VisibilityOffIcon,
    "getApp": GetAppIcon,
    "replay": ReplayIcon,
    "help": HelpIcon,
    "search": SearchIcon,
    "cancel": CancelIcon,
    "bookmark": BookmarkIcon,
    "bookmarkBorder": BookmarkBorderIcon,
    "code": CodeIcon,
    "link": LinkIcon,
    "subdirectoryArrowRight": SubdirectoryArrowRightIcon,
    "accessTime": AccessTimeIcon,
    "equalizer": EqualizerIcon,
    "moreVert": MoreVertIcon,
    "public": PublicIcon,
    "sentimentSatisfied": SentimentSatisfiedIcon,
    "tour": TourSvg,
    "services": ServicesSvg,
    "secrets": SecretsSvg,
    "account": AccountSvg,
    "home": HomeSvg,
    "files": FilesSvg,
    "collaborationTools": CollaborationToolsSvg,
    "bash": BashSvg,
    "catalog": CatalogSvg,
    "key": KeySvg,
    "language": LanguageIcon,
    "training": TrainingsLogoSvg,
    "people": PeopleIcon,
    "errorOutline": ErrorOutlineIcon,
    "assuredWorkload": AssuredWorkloadIcon,
    "grading": GradingIcon,
    "airplay": AirplayIcon,
    "computer": ComputerIcon,
    "rssFeed": RssFeedIcon,
    "playCircleFilledWhite": PlayCircleFilledWhiteIcon,
    "storage": StorageIcon
};

export const iconIds = [
    "http",
    "delete",
    "edit",
    "add",
    "filterNone",
    "check",
    "expandMore",
    "attachMoney",
    "chevronLeft",
    "cached",
    "close",
    "infoOutlined",
    "brightness7",
    "brightness4",
    "translate",
    "visibility",
    "visibilityOff",
    "getApp",
    "replay",
    "help",
    "search",
    "cancel",
    "bookmark",
    "bookmarkBorder",
    "code",
    "link",
    "subdirectoryArrowRight",
    "accessTime",
    "equalizer",
    "moreVert",
    "public",
    "sentimentSatisfied",
    "tour",
    "services",
    "secrets",
    "account",
    "home",
    "files",
    "collaborationTools",
    "bash",
    "catalog",
    "key",
    "language",
    "training",
    "people",
    "errorOutline",
    "assuredWorkload",
    "grading",
    "airplay",
    "computer",
    "rssFeed",
    "playCircleFilledWhite",
    "storage"
] as const;

assert<Equals<(typeof iconIds)[number], keyof typeof createIconParams>>();
