<?php

namespace yii2visjs;

use execut\yii\web\AssetBundle;
use Yii;

/**
 * @link http://www.frenzel.net/
 * @author Philipp Frenzel <philipp@frenzel.net> 
 */

class VisjsAsset extends AssetBundle
{
    public $basePath = '@vendor/philippfrenzel/yii2visjs';
    public $depends = [
        CoreAsset::class,
    ];
}
