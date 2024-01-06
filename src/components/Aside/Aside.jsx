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
import Rectangle from "../Rectangle/Rectangle"

const Aside = () => {
  return (
    <AsideStyled>
      <WrapperSticky>
        <AsideTitleStyled>
          <Rectangle>Top sections</Rectangle>
        </AsideTitleStyled>
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
