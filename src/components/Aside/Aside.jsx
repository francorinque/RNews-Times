import {
  AsideStyled,
  AsideSectionStyled,
  AsideWrapperStyled,
  WrapperSticky,
  AsideTitleStyled
} from "./AsideStyles"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { INITIAL_SECTIONS } from "../../utils/sections.utility"

const Aside = () => {
  return (
    <AsideStyled>
      <WrapperSticky>
        <AsideTitleStyled>Top sections</AsideTitleStyled>
        <AsideWrapperStyled>
          {INITIAL_SECTIONS?.map((item, i) => (
            <Link to={`/search-by-section/${item}`} key={item + i}>
              <AsideSectionStyled>{item}</AsideSectionStyled>
            </Link>
          ))}
        </AsideWrapperStyled>
      </WrapperSticky>
    </AsideStyled>
  )
}
export default Aside
