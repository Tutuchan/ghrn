import './env'
import {Command, flags} from '@oclif/command'
import {listNotifications} from './github'
import {handleReviews} from './notify'

class Ghrn extends Command {
  static description = 'Get notified for review requests'

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    frequency: flags.integer({char: 'f', default: 60, description: 'how often (in seconds) should notifications be checked'},),
  }

  async run() {
    const {flags} = this.parse(Ghrn)
    /*
      run a first time and setup the next runs
      the frequency is reduced for the actual run to give the app time to clear the current notifications before displaying the next ones
    */
    this.runOne(flags.frequency * 0.9)
    setInterval(() => this.runOne(flags.frequency * 0.9), flags.frequency * 1000)
  }

  async runOne(frequency: number) {
    const notifications = await listNotifications()
    this.log(`${notifications.length} new notification${notifications.length > 1 ? 's' : ''}`)
    if (notifications.length > 0) {
      handleReviews(notifications, 0, frequency)
    } else {
      this.log('No review requests at this time')
    }
  }
}

export = Ghrn
