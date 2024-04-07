import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Cat_MoodSleepy } from '../Cat_MoodSleepy/Cat_MoodSleepy';
import { CatInCup_MoodGrumpy } from '../CatInCup_MoodGrumpy/CatInCup_MoodGrumpy';
import { CatInCup_MoodHappy } from '../CatInCup_MoodHappy/CatInCup_MoodHappy';
import { Cup_EmptyFalse } from '../Cup_EmptyFalse/Cup_EmptyFalse';
import { Icon_IconLockBorderFalse } from '../Icon_IconLockBorderFalse/Icon_IconLockBorderFalse';
import { BodyIcon } from './BodyIcon';
import { BodyIcon2 } from './BodyIcon2';
import { BodyIcon3 } from './BodyIcon3';
import { BodyIcon4 } from './BodyIcon4';
import { BodyIcon5 } from './BodyIcon5';
import classes from './Cats.module.css';
import { Ellipse2Icon } from './Ellipse2Icon';
import { Ellipse2Icon2 } from './Ellipse2Icon2';
import { Ellipse2Icon3 } from './Ellipse2Icon3';
import { Ellipse3StrokeIcon } from './Ellipse3StrokeIcon';
import { Ellipse4StrokeIcon } from './Ellipse4StrokeIcon';
import { Ellipse5Icon } from './Ellipse5Icon';
import { Ellipse21Icon } from './Ellipse21Icon';
import { Ellipse21Icon2 } from './Ellipse21Icon2';
import { Ellipse21Icon3 } from './Ellipse21Icon3';
import { EyeleftIcon } from './EyeleftIcon';
import { EyerightIcon } from './EyerightIcon';
import { Group6Icon } from './Group6Icon';
import { Group6Icon2 } from './Group6Icon2';
import { Group6Icon3 } from './Group6Icon3';
import { Group6Icon4 } from './Group6Icon4';
import { Group6Icon5 } from './Group6Icon5';
import { TailStrokeIcon } from './TailStrokeIcon';
import { TailStrokeIcon2 } from './TailStrokeIcon2';
import { TailStrokeIcon3 } from './TailStrokeIcon3';
import { TailStrokeIcon4 } from './TailStrokeIcon4';
import { VectorIcon } from './VectorIcon';
import { VectorStrokeIcon } from './VectorStrokeIcon';
import { VectorStrokeIcon2 } from './VectorStrokeIcon2';
import { VectorStrokeIcon3 } from './VectorStrokeIcon3';
import { VectorStrokeIcon4 } from './VectorStrokeIcon4';

interface Props {
  className?: string;
}
/* @figmaId 22:1620 */
export const Cats: FC<Props> = memo(function Cats(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.tile1}></div>
      <div className={classes.tile2}></div>
      <div className={classes.tile3}></div>
      <div className={classes.tile4}></div>
      <div className={classes.tile5}></div>
      <div className={classes.tile6}></div>
      <div className={classes.pearl2}>Pearl</div>
      <div className={classes.milo2}>Milo</div>
      <CatInCup_MoodHappy
        className={classes.pearl}
        classes={{
          body: classes.body,
          vectorStroke: classes.vectorStroke,
          mouth: classes.mouth,
          group6: classes.group6,
          cup: classes.cup,
        }}
        swap={{
          tailStroke: <TailStrokeIcon className={classes.icon} />,
          body: (
            <div className={classes.body}>
              <BodyIcon className={classes.icon2} />
            </div>
          ),
          ellipse2: <Ellipse2Icon className={classes.icon3} />,
          ellipse21: <Ellipse21Icon className={classes.icon4} />,
          vectorStroke: (
            <div className={classes.vectorStroke}>
              <VectorStrokeIcon className={classes.icon5} />
            </div>
          ),
          group6: (
            <div className={classes.group6}>
              <Group6Icon className={classes.icon6} />
            </div>
          ),
        }}
      />
      <div className={classes.luna2}>Luna</div>
      <CatInCup_MoodGrumpy
        className={classes.luna}
        classes={{
          body: classes.body2,
          vectorStroke: classes.vectorStroke2,
          mouth: classes.mouth2,
          group6: classes.group62,
        }}
        swap={{
          tailStroke: <TailStrokeIcon2 className={classes.icon7} />,
          body: (
            <div className={classes.body2}>
              <BodyIcon2 className={classes.icon8} />
            </div>
          ),
          eyeLeft: <EyeleftIcon className={classes.icon9} />,
          eyeRight: <EyerightIcon className={classes.icon10} />,
          vectorStroke: (
            <div className={classes.vectorStroke2}>
              <VectorStrokeIcon2 className={classes.icon11} />
            </div>
          ),
          group6: (
            <div className={classes.group62}>
              <Group6Icon2 className={classes.icon12} />
            </div>
          ),
        }}
      />
      <div className={classes.lola}>Lola</div>
      <div className={classes.lola2}>
        <Cat_MoodSleepy
          className={classes.cat}
          classes={{ body: classes.body3, mouth: classes.mouth3 }}
          swap={{
            body: (
              <div className={classes.body3}>
                <BodyIcon3 className={classes.icon13} />
              </div>
            ),
            ellipse3Stroke: <Ellipse3StrokeIcon className={classes.icon14} />,
            ellipse4Stroke: <Ellipse4StrokeIcon className={classes.icon15} />,
            ellipse5: <Ellipse5Icon className={classes.icon16} />,
          }}
        />
        <Cup_EmptyFalse
          className={classes.cup2}
          classes={{ group6: classes.group63 }}
          swap={{
            group6: (
              <div className={classes.group63}>
                <Group6Icon3 className={classes.icon17} />
              </div>
            ),
          }}
        />
      </div>
      <CatInCup_MoodHappy
        className={classes.milo}
        classes={{
          body: classes.body4,
          vectorStroke: classes.vectorStroke3,
          mouth: classes.mouth4,
          group6: classes.group64,
          cup: classes.cup3,
        }}
        swap={{
          tailStroke: <TailStrokeIcon3 className={classes.icon18} />,
          body: (
            <div className={classes.body4}>
              <BodyIcon4 className={classes.icon19} />
            </div>
          ),
          ellipse2: <Ellipse2Icon2 className={classes.icon20} />,
          ellipse21: <Ellipse21Icon2 className={classes.icon21} />,
          vectorStroke: (
            <div className={classes.vectorStroke3}>
              <VectorStrokeIcon3 className={classes.icon22} />
            </div>
          ),
          group6: (
            <div className={classes.group64}>
              <Group6Icon4 className={classes.icon23} />
            </div>
          ),
        }}
      />
      <div className={classes.chestnut2}>Chestnut</div>
      <CatInCup_MoodHappy
        className={classes.chestnut}
        classes={{
          body: classes.body5,
          vectorStroke: classes.vectorStroke4,
          mouth: classes.mouth5,
          group6: classes.group65,
          cup: classes.cup4,
        }}
        swap={{
          tailStroke: <TailStrokeIcon4 className={classes.icon24} />,
          body: (
            <div className={classes.body5}>
              <BodyIcon5 className={classes.icon25} />
            </div>
          ),
          ellipse2: <Ellipse2Icon3 className={classes.icon26} />,
          ellipse21: <Ellipse21Icon3 className={classes.icon27} />,
          vectorStroke: (
            <div className={classes.vectorStroke4}>
              <VectorStrokeIcon4 className={classes.icon28} />
            </div>
          ),
          group6: (
            <div className={classes.group65}>
              <Group6Icon5 className={classes.icon29} />
            </div>
          ),
        }}
      />
      <Icon_IconLockBorderFalse
        className={classes.locked}
        swap={{
          vector: <VectorIcon className={classes.icon30} />,
        }}
      />
    </div>
  );
});
