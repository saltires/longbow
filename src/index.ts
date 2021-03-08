import { common, commonInterface } from './common'
import { cookie, cookieInterface } from './cookie'
import { date, dateInterface } from './date'
import { device, deviceInterface } from './device'
import { dom, domInterface } from './dom'
import { check, checkInterface } from './regexp'
import { str, stringInterface } from './string'
import { url, urlInterface } from './url'
import { name, version } from '../package.json'

interface saltireUtilInterface extends commonInterface, cookieInterface, dateInterface, deviceInterface, domInterface, checkInterface, stringInterface, urlInterface {
    version: string,
    name: string
}

const saltireUtil: saltireUtilInterface = Object.assign({ name, version }, cookie, common, date, device, dom, check, str, url)

export default saltireUtil