import user from './user';
import menu from './menu';
import admin from './admin';
import group from './group';

/**
 * 模拟数据mock
 *
 * mock是否开启模拟数据拦截
 */

user({ mock: true });

menu({ mock: true });

admin({ mock: true });


group({ mock: true });
