import { useContext } from 'react';
import { useNearScreen } from '../../../../hooks/useNearScreen';
import RecipesContext from 'context/recipes/RecipesContext';
import { apiVersion, basePath } from 'api/utils/config';
import { Recipe } from 'interfaces/recipe';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import './RecipesComponent.scss';
import moment from 'moment';
require('moment/locale/es');

export default function RecipesComponent() {
  const { recipes, orderBy, setOrderByAction } = useContext(RecipesContext)
  return (
    <div className='recipes-component'>
      <div className='recipes-component__order-by'>
        <button className='recipes-component__order-by--btn'>
          {orderBy === 'asc' ?
            <ArrowUpOutlined onClick={() => setOrderByAction('desc')} /> :
            <ArrowDownOutlined onClick={() => setOrderByAction('asc')} />}
        </button>
      </div>
      {recipes && recipes.map((data: any, index: number) => (
        <RenderCard data={data} key={index} />
      ))}
    </div>
  );
}

function RenderCard({ data }: { data: Recipe }) {
  const { title, cookingTime, recipeImage, author, createdAt } = data;
  const [show, el] = useNearScreen();
  const img = `${basePath}/${apiVersion}/get-recipe-image/${recipeImage}`
  return (
    <div ref={el} className='recipes-component-div'>
      {show && (
        <article className="recipes-component-div__container">
          <div className="recipes-component-div__container--card">
            <div className="recipes-component-div__container--card__header">
              <span className="recipes-component-div__container--card__header__cookingTime">
                {cookingTime}
              </span>
              <img
                src={img}
                alt="recipe__image"
                className="recipes-component-div__container--card__header__image"
                width="600"
              />
            </div>
            <div className="recipes-component-div__container--card__body">
              <h4>{title}</h4>
            </div>
            <div className="recipes-component-div__container--card__footer">
              <div className="recipes-component-div__container--card__footer--user">
                <span className="recipes-component-div__container--card__footer--user__name">{author}</span>
                <span className="recipes-component-div__container--card__footer--user__createdAt">{moment(createdAt, "YYYYMMDD").fromNow()}</span>
              </div>
            </div>
          </div>
        </article>
      )
      }
    </div>
  )
}